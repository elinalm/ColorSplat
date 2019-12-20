class Button implements DrawableObject {
    // Class attributes
    private x: number
    private y: number
    private width: number
    private height: number 
    private text: string
    private isMouseDown: boolean
    private col: string
    

    // Class constructor
    constructor(x: number, y: number, width: number, height: number, text: string, isMouseDown: boolean, col: string){
        this.x = x
        this.y = y
        this.width = width
        this.height = height 
        this.text = text
        this.isMouseDown = isMouseDown

        if(mouseX >= this.x - (this.width/2) && mouseX <= this.x + (this.width/2)) {
            this.col = 'red'
        }
        else {
            this.col = col
        }
    }


    // Class functions
    public draw(){
        push()
        rectMode(CENTER)
        fill(this.col)
        rect(this.x, this.y, this.width, this.height, 20)
        fill('white')
        text(this.text, this.x, this.y + 5)
        pop()
        
        this.drawHitBox()
    }


    private drawHitBox() {
        push()
        rectMode(CENTER)
        noFill()
        stroke('red')
        rect(this.x, this.y, this.width, this.height, 20)
        pop()
    }

    private getHitbox(): HitBoxRect {
        return {
            x: this.x-this.width/2,
            y: this.y-this.height/2,
            rhs: this.x + this.width/2,
            bhs: this.y + this.height/2,
            width: this.width,
            height: this.height
        }
    }

    private checkCollision() {
        const x1 = 10;
        const y1 = 10;
        const r1 = 5;
        
        const x2 = 30;
        const y2 = 30;
        const r2 = 10;

        const distance = dist(x1, y1, x2, y2);

        if (distance < r1 + r2) {
            // Booooom
        }
    }
    
    public handleMousePressed(): boolean{    
        const box = this.getHitbox();
        if (!mouseIsPressed && this.isMouseDown && (
            mouseX > box.x &&
            mouseX < box.width &&
            mouseY > box.y &&
            mouseY < box.height)
        ){
            return true
        }
        
        this.isMouseDown = mouseIsPressed 
        return false
    }


}

