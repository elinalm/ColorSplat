///<reference path="abstract-btn.ts" />
namespace _btn {
    export class RadioButton extends Button implements DrawableObject{
        // Class attributes
        private values: Array<number>
        private valuePos: Array<number> = []
        private definedValue: number
        private mouseWasPressed = false

        // Class constructor
        constructor(x: number, y: number, width: number, height: number, color: string, isMouseDown: boolean, values: Array<number>, definedValue: number) {
            super(x, y, width, height, color, isMouseDown)
            this.values = values
            this.definedValue = definedValue
            let posIndex = windowWidth/(this.values.length+4)
            let startIndex = posIndex*1.5
            for (let i = 0; i < this.values.length; i++) {
                startIndex+=posIndex
                this.valuePos.push(startIndex)
            }
        }

        //Class functions
        public draw(){
            push()
            fill(this.color)
            rectMode(CENTER)
            rect(this.x, this.y, this.width, this.height)

            for (let i = 0; i < this.values.length; i++) {
                noStroke()
                if (this.values[i] === this.definedValue) {
                    fill('gray')
                    rect(this.valuePos[i], this.y, 50, 50)
                }
                fill('white')
                textAlign(CENTER)
                textSize(40)
                text(this.values[i], this.valuePos[i], this.y+14)
            }
            // let index = 0
            // this.values.forEach(value => {
            //     fill(this.color)
            //     noStroke()
            //     if (index === this.definedValue) {
            //         console.log(index, this.definedValue);
                    
            //         fill('blue')
            //         rect(this.valuePos[index], this.y, 50, 50)
            //     }
            //     fill('white')
            //     textAlign(CENTER)
            //     textSize(40)
            //     text(value, this.valuePos[index], this.y+14)
            //     index++
            // });
            pop()
        }

        public handleMousePressed() { 
            if(!this.isMouseDown && mouseIsPressed){
                this.mouseWasPressed = true
            }
            if(this.mouseWasPressed && !mouseIsPressed){
                this.mouseWasPressed = false
                for (let i = 0; i < this.values.length; i++) {
                    if (
                        mouseX >= (this.valuePos[i] - 25) &&
                        mouseX <= (this.valuePos[i] + 25) &&
                        mouseY >= (this.y - 25) &&
                        mouseY <= (this.y + 25)
                        ){                    
                            this.definedValue = this.values[i]
                    }                    
                }
            }
            return this.definedValue
        }
    }
}