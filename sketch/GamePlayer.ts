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
        draw(): void {
            //Insert draw logic here
        }

        update() /*: PlayerProjectile*/ {
            // const projectile = new PlayerProjectile(1, 1, this.applyPowerUp(powerUp), this.color)
    
            // return projectile;
        }

        handleControls(): void {
            //Insert controls logic here
        }
        private applyPowerUp = (powerUp: string) => {
            // this.powerUp = powerUp
            // todo....
        }
    }
}