///<reference path="abstract-Player.ts" />
namespace _ply {
    export class GamePlayer extends Player implements DrawableObject{
        // color: string
        // aimLeft: string
        // fireButton: string
        // aimRight: string
    
        // constructor (color: string, aimLeft: string, fireButton: string, aimRight: string) {
        //     this.color = color
        //     this.aimLeft = aimLeft
        //     this.fireButton = fireButton
        //     this.aimRight = aimRight
        // }
    
        // Class functions
        draw(xPos: number, yPos: number): void {
            push()
            noFill()
            stroke(this.color)
            strokeWeight(5)
            //First vertical line of body
            line((xPos - 70), yPos, xPos - 70, yPos - 50)
            //First horizontal line into the cannon head
            line((xPos - 70), yPos - 50, xPos - 60, yPos - 50)
            //Cannon head
            arc((xPos - 20), yPos - 52, 80, 80, PI, 0)

            line((xPos + 20), yPos - 50, xPos + 30, yPos - 50)
            line((xPos + 30), yPos - 50, xPos + 30, yPos)
            //Cannon head reflection
            strokeWeight(1)
            // arc(xPos - 20, yPos - 52, 60, 60, PI, 300)
            pop()


            //Barrel body
            // noStroke()

            //Försöker att snurra på mynningen
            push()
            rect((xPos - 35), (yPos-110), 30, 60)
            fill(this.color)
            //Barrel head
            rect((xPos - 40), (yPos - 125), 40, 15)
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
                if (keyIsDown && key === this.aimLeft) {
                    console.log(`aim left ${this.aimLeft, this.name}`);  
                }
                else if (keyIsDown && key === this.aimRight) {
                    console.log(`aim right ${this.aimRight, this.name}`);
                }
                else if (keyIsDown && key === this.fireButton) {
                    console.log(`FIRE!! ${this.fireButton, this.name}`);
                    
                }
                
            }
        // }
        private applyPowerUp = (powerUp: string) => {
            // this.powerUp = powerUp
            // todo....
        }
    }
}