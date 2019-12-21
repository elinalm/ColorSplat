namespace _btn {
    export abstract class Button {
        // Class attributes
        x: number
        y: number
        width: number
        height: number
        color: string
        isMouseDown: boolean
        
    
        // Class constructor
        constructor(x: number, y: number, width: number, height: number, color: string, isMouseDown: boolean){
            this.x = x
            this.y = y
            this.width = width
            this.height = height 
            this.color = color
            this.isMouseDown = isMouseDown
        }
    }
}


