
interface DrawableObject {
    // Interface functions
    draw(x?: number, y?: number):void
}

interface ApplyPowerUp {
    applyPowerUp: (powerUp: string) => void
}

interface MovingObject extends DrawableObject {
    // Interface attributes
    velX: number,
    velY: number

    //Interface functions
    updatePos(): void
}

interface CollidableObject extends MovingObject{
    x: number
    y: number
    radius: number
    color: string
    hasCollided: boolean
    checkCollision: (otherObject: CollidableObject[]) => boolean
    setHasExploded:(status: boolean) => void
    getHasExploded:() => boolean
    getOwnerPlayer:() => void
}

interface PlayerFromProjectile {
    setProjectileExists:(status: boolean) => void
}

interface PassByFire {
    addCollidableObjectToList:(collidableObject: CollidableObject) => void
    getCollidableObjectList:() => Array<CollidableObject>
    removeCollidableObjectFromList:(index: number) => void
}

interface HitBoxRect {
    x: number
    y: number
    width: number
    height: number
    rhs: number
    bhs: number
}
