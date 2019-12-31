///<reference path="abstract-Player.ts" />
namespace _ply {
    export class MenuPlayer extends Player implements DrawableObject{
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
        draw(x: number, y: number): void {
            push()
            rectMode(CENTER)
            textAlign(CENTER)
            
            fill(`rgb(${this.color})`)
            rect(x,y-20,150,40)
            
            fill('white')
            textSize(24)
            stroke('#1B1E1A')
            strokeWeight(1.5)
            text(this.name, x, y-13)
            textSize(20)
            text(`fire: ${this.fireButton[0]}`, x, y+20)
            text(`aim: ${this.aimLeft[0]} + ${this.aimRight[0]}`, x, y+40)
            pop()
        }
    }
}