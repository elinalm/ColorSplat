
interface DrawableObject {
    // Interface functions
    draw(timer?: number): void

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

interface CollidableObject {
    x: number
    y: number
    radius: number
    checkCollision: (otherObject: CollidableObject) => boolean
}

interface HitBoxRect {
    x: number
    y: number
    width: number
    height: number
    rhs: number
    bhs: number
}