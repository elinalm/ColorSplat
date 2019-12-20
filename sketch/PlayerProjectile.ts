class PlayerProjectile implements MovingObject, CollidableObject {
    // Class attributes
    velX: number
    velY: number
    applyPowerUpCallback: () => void

    // Class constructor
    constructor (velX: number, velY: number, player:ApplyPowerUp)/* applyPowerUpCallback: () => void) */{
        this._x = 20
        this.velX = velX
        this.velY = velY
        this._radius = 10
        this._blastRadius = 100
        this.applyPowerUpCallback = applyPowerUpCallback
        player.applyPowerUp
    }

    private _x: number
    
    public get x(): number {
        return this._x;
    }

    public get y: number
    public get radius: number
    
    public checkCollision(otherObject: CollidableObject): boolean {
        if (this === otherObject) {
            return false
        }

        if (otherObject instanceof PlayerProjectile) {
            //this._radius
        }
        if (otherObject instanceof PowerUp) {
            //this._blastRadius
            this.applyPowerUpCallback()
        }
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