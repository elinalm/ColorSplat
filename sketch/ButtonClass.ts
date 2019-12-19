class Button implements DrawableObject {
    // Class attributes
    private x: number
    private y: number
    private width: number
    private height: number
    private text: string
    private isMouseDown: boolean

    // Class constructor
    constructor (x: number, y: number, width: number, height: number, text: string, isMouseDown: boolean) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.text = text
        this.isMouseDown = isMouseDown
    }
    
    // Class functions
    draw(): void {
        
    }
}