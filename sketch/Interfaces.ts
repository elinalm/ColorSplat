
interface DrawableObject {
    // Interface functions
    draw(x?: number, y?: number):void
}

interface MovingObject extends DrawableObject {
    // Interface attributes
    velX: number
    velY: number

    //Interface functions
    updatePos(): void
}

interface CollidableObject extends MovingObject{
    x: number
    y: number
    radius: number
    color: string
    shouldBeRemoved: boolean
    setHasExploded?:(status: boolean) => void
    getHasExploded?:() => boolean
}

interface PlayerFromProjectile {
    setProjectileExists:(status: boolean) => void
    applyPowerUp:(powerUp: PowerUp) => void
}

interface PassByFire {
    target: DrawExplosions
    addCollidableObjectToList:(collidableObject: CollidableObject) => void
    getCollidableObjectList:() => Array<CollidableObject>
    removeCollidableObjectFromList:(index: number) => void
}

interface DrawExplosions {
    addSplashToTargetCanvas:(splash: Splash) => void
}

interface HitBoxRect {
    x: number
    y: number
    width: number
    height: number
    rhs: number
    bhs: number
}

interface Splash {
    posX: number
    posY: number
    color: string
    splashDiameter: number
}
