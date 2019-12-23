///<reference path="abstract-Player.ts" />
namespace _ply {
    export class GamePlayer extends Player implements DrawableObject{
        // color: string
        // aimLeft: string
        // fireButton: string
        // aimRight: string
        private angle = 180
        private barrelPos = 0
    
        // constructor (color: string, aimLeft: string, fireButton: string, aimRight: string) {
        //     this.color = color
        //     this.aimLeft = aimLeft
        //     this.fireButton = fireButton
        //     this.aimRight = aimRight
        // }
    
        // Class functions
        draw(xPos: number, yPos: number): void {

            push()
            noStroke()
            translate(xPos, yPos)
            rotate(this.angle)
            fill(this.color)
            rect((-20), this.barrelPos+10, 40, 85)
            pop()


            push()
            noFill()
            stroke(this.color)
            strokeWeight(5)
            // //First vertical line of body
            // line((xPos), yPos, xPos - 70, yPos - 50)
            // //First horizontal line into the cannon head
            // line((xPos), yPos - 50, xPos - 60, yPos - 50)
            //Cannon head
            fill('#1B1E1A')
            arc((xPos), windowHeight, 120, 120, PI, 0)

            // line((xPos + 20), yPos - 50, xPos + 30, yPos - 50)
            // line((xPos + 30), yPos - 50, xPos + 30, yPos)
            //Cannon head reflection
            strokeWeight(1)
            // arc(xPos - 20, yPos - 52, 60, 60, PI, 300)
            pop()


            //Barrel body
            // noStroke()

            //Försöker att snurra på mynningen
            push()
            noStroke()
            translate(xPos, yPos)
            rotate(this.angle)
            fill('#1B1E1A')
            rect((-15), (this.barrelPos) + 10, 30, 75)
            fill(this.color)
            //Barrel head
            rect((-25), (this.barrelPos + 85), 50, 15)
            pop()
            //push()
            //stroke(this.color)
            //chargebar
            //rect(xPos + 50, yPos - 51, 15, 45)
            //pop()
        }

        update() /*: PlayerProjectile*/ {
            // const projectile = new PlayerProjectile(1, 1, this.applyPowerUp(powerUp), this.color)
    
            // return projectile;
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
            if (!keyIsDown(this.fireButton[1])) {
                this.barrelPos = 0
            }
        }
           
        private applyPowerUp = (powerUp: string) => {
            // this.powerUp = powerUp
            // todo....
        }
    }
}