///<reference path="abstract-Player.ts" />
namespace _ply {
    export class GamePlayer extends Player implements DrawableObject{

        private angle = 180
        private barrelPos = 0
        private projectileExists = false
        private shouldFire = false
        private cOM: PassByFire
        private xPos : number
        private yPos : number
        private barrelPoint = {x: 0, y: 0}
        private cooldownActive = false
        private cooldownValue = -89

        constructor (name: string, color: string, aimLeft: Array<string>, fireButton: Array<string>, aimRight: Array<string>, cOM: PassByFire, position: {x: number, y:number}) {
            super(name, color, aimLeft, fireButton, aimRight)
            this.cOM = cOM
            this.xPos = position.x
            this.yPos = position.y
        }

        getProjectileExists() {
            return this.projectileExists
        }

        setProjectileExists(status: boolean): void {
            this.projectileExists = status
        }
    
        // Class functions
        draw(): void {
            
            //Barrel outline
            push()
            angleMode(DEGREES)
            noStroke()
            translate(this.xPos, this.yPos)
            rotate(this.angle)
            fill(this.color)
            rect((-20), this.barrelPos+10, 40, 85)
            pop()

            //Cannon head
            push()
            stroke(this.color)
            strokeWeight(5)
            fill('#1B1E1A')
            arc(this.xPos, this.yPos, 120, 120, PI, 0)
            pop()
            
            //Barrel body
            push()
            angleMode(DEGREES)
            noStroke()
            translate(this.xPos, this.yPos)
            rotate(this.angle)
            fill('#1B1E1A')
            rect((-15), (this.barrelPos) + 10, 30, 75)
            fill(this.color)
            
            //Barrel head
            rect((-25), (this.barrelPos + 85), 50, 15)
            pop()

            //Cooldown area
            push()
            angleMode(RADIANS)
            noStroke()
            // strokeWeight(3)
            // stroke('#30362f')
            fill('gray')
            arc(this.xPos, this.yPos-25, 30, 30, 0, PI*2)
            strokeWeight(3)
            stroke('#30362f')
            noFill()
            arc(this.xPos, this.yPos-25, 20, 20, 0, PI*2)
            pop()

            if (this.cooldownActive) {
                push()
                angleMode(RADIANS)
                strokeWeight(3)
                // console.log(this.cooldownValue);
                noFill()
                stroke(this.color)
                // fill('white')
                arc(this.xPos, (this.yPos-25), 20, 20, radians(-90), radians(this.cooldownValue))
                pop()
            }        
        }

        update() /*: PlayerProjectile*/ {
            // const projectile = new PlayerProjectile(1, 1, this.applyPowerUp(powerUp), this.color)
            // return projectile;

            // Save barrels x position for projectile spawnpoint
            this.barrelPoint.x = this.xPos + ((this.angle-180)*1.6)
            // Save barrels y position for projectile spawnpoint
            this.barrelPoint.y = (this.yPos-100) + Math.pow((this.angle-180)*.3, 2)*.15
            
             
        }

        // handleControls(): void {
        public handleControls() {
            // Controls for aiming left
            if (keyIsDown(this.aimLeft[1])) {
                if (this.angle >= 130) {
                    this.angle-=2
                }
            }
            // Controls for aiming right
            if (keyIsDown(this.aimRight[1])) {
                if (this.angle <= 230) {
                    this.angle+=2
                }
            }
            // Controls for fire button
            if (keyIsDown(this.fireButton[1])) {
                const projectileArray = this.cOM.getCollidableObjectList()

                // If projectile exists
                if (this.projectileExists) {
                    // Remove the projectile from the stack
                    for (let i = 0; i < projectileArray.length; i++) {
                        if (projectileArray[i].color === this.color) {
                            this.cOM.removeCollidableObjectFromList(i)
                            
                            // Cooldown 1 second after exploding projectile
                            let cooldown = 50
                            this.cooldownActive = true
                            let cooldownTimer = setInterval( ()=> {
                                cooldown--
                                this.cooldownValue += 360/50
                                if (cooldown === 0) {
                                    clearInterval(cooldownTimer)
                                    this.cooldownActive = false
                                    this.projectileExists = false
                                    this.cooldownValue = -89
                                }
                            }, 10)

                            // setTimeout(()=> {
                            //     this.projectileExists = false
                            // },1000)
                        }
                    }
                }
                // "Load" barrel by moving rectangle
                else {
                    // Instruct player to shoot              
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
            }
            // If firebutton is released and player should shoot
            if (!keyIsDown(this.fireButton[1])&&(this.shouldFire)) {
                // Create projectile and add it to the stack
                const projectile = new PlayerProjectile((this.angle-180)*(this.barrelPos*-.015),(this.barrelPos*.85),this.color,this.barrelPoint.x, this.barrelPoint.y, 10, this)
                this.cOM.addCollidableObjectToList(projectile)

                // Reset barrels position
                this.barrelPos = 0
                // Reset shoot instruction
                this.shouldFire = false
                // Save projectile status
                this.projectileExists = true
            }
        }
           
        // private applyPowerUp = (powerUp: string) => {
        //     // this.powerUp = powerUp
        //     // todo....
        // }
    }
}