///<reference path="abstract-btn.ts" />
namespace _btn {
    export class BoolButton extends Button implements DrawableObject{
        private text: string
    
        constructor(x: number, y: number, width: number, height: number, color: string, text: string, isMouseDown: boolean) {
            super(x, y, width, height, color, isMouseDown)
            this.text = text
            this.isMouseDown = isMouseDown
        }
    
        public handleMousePressed(): boolean {    
            const box = this.getHitbox();
            if (!mouseIsPressed && this.isMouseDown && (
                mouseX > box.x &&
                mouseX < box.rhs &&
                mouseY > box.y &&
                mouseY < box.bhs)
                ){
                    return true
                }
        
            this.isMouseDown = mouseIsPressed 
            return false
        }
    
        public draw(){
            const box = this.getHitbox()
            push()
            fill(this.color)
            rect(box.x, box.y, box.width, box.height, 20)
            fill('white')
            textAlign(CENTER)
            textSize(30)
            text(this.text, this.x, this.y+10)
            pop()
        }

        private getHitbox(): HitBoxRect {
            return {
                x: this.x - this.width/2,
                y: this.y - this.height/2,
                rhs: (this.x - this.width/2) + this.width,
                bhs: (this.y - this.height/2) + this.height,
                width: this.width,
                height: this.height
            }
        }
        
    }
}