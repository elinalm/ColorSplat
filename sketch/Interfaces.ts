
interface DrawableObject {
    // Interface functions
    draw(x?: number, y?: number): void
}

interface MovingObject extends DrawableObject {
    // Interface attributes
    velX: number,
    velY: number

    //Interface functions
    updatePos(): number
}

