
interface DrawableObject {
    // Interface functions
    draw(): void
}

interface Player extends DrawableObject {
    // Interface attributes
    color: string
}

interface MovingObject extends DrawableObject {
    // Interface attributes
    velX: number,
    velY: number

    //Interface functions
    updatePos(): number
}
