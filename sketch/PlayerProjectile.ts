class PlayerProjectile implements MovingObject, CollidableObject {
    // Class attributes
    velX: number
    velY: number
    color: string
    radius: number
    x: number
    y: number
    private _blastRadius: number
    // applyPowerUpCallback: () => void
    
    // Class constructor
    constructor (velX: number, velY: number, player:ApplyPowerUp, color: string)/* applyPowerUpCallback: () => void) */{
        this.velX = velX
        this.velY = velY
        this.color = color
        player.applyPowerUp
        this.x = 20
        this.y = 20
        this.radius = 10
        this._blastRadius = 100
        // this.applyPowerUpCallback = applyPowerUpCallback
    }
    
    public get _x(): number {
        return this._x
    }

    public get _y(): number {
        return this._y
    }

    
    public checkCollision(otherObject: CollidableObject): boolean{
        // if (this === otherObject) {
        // ***This condition will always return 'false' since the types 'this' and 'CollidableObject' have no overlap.ts(2367)**
        //     return false
        // }

        if (otherObject instanceof PlayerProjectile) {
            //this.radius
        }
        if (otherObject instanceof PowerUp) {
            //this._blastRadius
        }
        return true /*Tillagd för att få bort errors*/
    }
    
    
    // Class functions
    public draw(): void {
        // Insert draw logic here
    }

    public updatePos(): number {
        // Insert position update logic here
        return 1
    }

}