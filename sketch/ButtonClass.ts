let button; 

class Button implements DrawableObject {
    // Class attributes
    private x: number
    private y: number
    private width: number
    private height: number 
    private text: string
    private isMouseDown: boolean
    

    // Class constructor
    constructor(x: number, y: number, width: number, height: number, text: string, isMouseDown: boolean){
        this.x = x
        this.y = y
        this.width = width
        this.height = height 
        this.text = text
        this.isMouseDown = isMouseDown
    }


    // Class functions
    public draw(){
        push()
        rectMode(CENTER)
        fill('red')
        rect(this.x, this.y, this.width, this.height, 20)
        fill('white')
        text(this.text, this.x - 30, this.y + 5)
        pop() 
    }

    
    public handleMousePressed(): boolean{    
        if (this.isMouseDown && this.isMouseDown && (mouseX >= this.x + this.width/2 && mouseX <= this.x + this.width/2 + this.width) && (mouseY >= this.y + this.height/2 && mouseY <= this.y + this.height/2 + this.height)){

            return true
        }
        
        this.isMouseDown = mouseIsPressed 
            return false
    }

}

