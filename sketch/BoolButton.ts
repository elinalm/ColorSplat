///<reference path="abstract-btn.ts" />
namespace _btn {
    export class BoolButton extends Button implements DrawableObject{
        // x: number
        // y: number
        // width: number
        // height: number
        // color: string
        // isMouseDown: boolean
        private text: string
    
        constructor(x: number, y: number, width: number, height: number, color: string, text: string, isMouseDown: boolean) {
            super(x, y, width, height, color, isMouseDown)
            this.text = text
            this.isMouseDown = isMouseDown
        }
    
        public handleMousePressed(): boolean{    
            if (this.isMouseDown && this.isMouseDown && (mouseX >= this.x + this.width/2 && mouseX <= this.x + this.width/2 + this.width) && (mouseY >= this.y + this.height/2 && mouseY <= this.y + this.height/2 + this.height)){
                return true
            }      
            this.isMouseDown = mouseIsPressed 
                return false
        }
    
        public draw(){
            push()
            rectMode(CENTER)
            fill('red')
            rect(this.x, this.y, this.width, this.height, 20)
            fill('white')
            text(this.text, this.x - 30, this.y + 5)
            pop() 
        }  
    }
}