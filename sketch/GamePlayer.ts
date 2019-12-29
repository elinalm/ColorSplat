///<reference path="abstract-Player.ts" />
namespace _ply {
    export class GamePlayer extends Player implements DrawableObject{

        private angle = 180
        private barrelPos = 0
        private shouldFire = false
        private cOM: PassByFire
        private xPos : number
        private yPos : number
        private barrelPoint = {x: 0, y: 0}

        constructor (name: string, color: string, aimLeft: Array<string>, fireButton: Array<string>, aimRight: Array<string>, cOM: PassByFire, position: {x: number, y:number}) {
            super(name, color, aimLeft, fireButton, aimRight)
            this.cOM = cOM
            this.xPos = position.x
            this.yPos = position.y
        }
    
        // Class functions
        draw(): void {
            
            //Barrel outline
            push()
            noStroke()
            translate(this.xPos, this.yPos)
            rotate(this.angle)
            fill(this.color)
            rect((-20), this.barrelPos+10, 40, 85)
            pop()

            //Cannon head
            push()
            noFill()
            stroke(this.color)
            strokeWeight(5)           
            fill('#1B1E1A')
            arc(this.xPos, this.yPos, 120, 120, PI, 0)
            pop()
            
            //Barrel body
            push()
            noStroke()
            translate(this.xPos, this.yPos)
            rotate(this.angle)
            fill('#1B1E1A')
            rect((-15), (this.barrelPos) + 10, 30, 75)
            fill(this.color)

            //Barrel head
            rect((-25), (this.barrelPos + 85), 50, 15)
            pop()
        }

        update() /*: PlayerProjectile*/ {
            // const projectile = new PlayerProjectile(1, 1, this.applyPowerUp(powerUp), this.color)
    
            // return projectile;

            this.barrelPoint.x = this.xPos + ((this.angle-180)*1.6)
            this.barrelPoint.y = (this.yPos-100) + Math.pow((this.angle-180)*.3, 2)*.15
            
             
        }

        // handleControls(): void {
        public handleControls() {
            if (keyIsDown(this.aimLeft[1])) {
                if (this.angle >= 130) {
                    this.angle-=2
                }
            }
            if (keyIsDown(this.aimRight[1])) {
                if (this.angle <= 230) {
                    this.angle+=2
                }
            }
            if (keyIsDown(this.fireButton[1])) {
               
                this.shouldFire = true
                if (this.barrelPos > -20) {
                    
                    if (this.barrelPos > -10) {
                        this.barrelPos -= .3

                    }
                    else if (this.barrelPos < -10) {
                        this.barrelPos -= .1
                        if (this.barrelPos < -19) {
                            this.barrelPos = -18
                        }
                    }
                }                
            }
            if (!keyIsDown(this.fireButton[1])&&(this.shouldFire)) {
                this.shouldFire = false
                
                const projectile = new PlayerProjectile((this.angle-180)*(this.barrelPos*-.015),(this.barrelPos*.85),this.color,this.barrelPoint.x, this.barrelPoint.y, 10)
                this.cOM.addCollidableObjectToList(projectile)
                
                this.barrelPos = 0
            }
        }
           
        private applyPowerUp = (powerUp: string) => {
            // this.powerUp = powerUp
            // todo....
        }
    }
}