class PlayerProjectile implements MovingObject, CollidableObject {
    // Class attributes
    velX: number
    velY: number
    color: string
    radius: number = 60
    x: number
    y: number
    private projectileGravity: number = 0.2
    blastRadius: number
    hasCollided: boolean = false
    // applyPowerUpCallback: () => void
    
    // Class constructor
    constructor (velX: number, velY: number, /*player:ApplyPowerUp,*/ color: string , x: number, y: number, blastRadius: number)/* applyPowerUpCallback: () => void) */{
        this.velX = velX
        this.velY = velY
        this.color = color
        //player.applyPowerUp
        this.x = x
        this.y = y
        this.radius = 10
        this.blastRadius = blastRadius
        // this.applyPowerUpCallback = applyPowerUpCallback
    }
    
    public get _x(): number {
        return this.x
    }

    public get _y(): number {
        return this.y
    }

    public get _color(): string {
        return this.color
    }

    public get _radius(): number{
        return this.radius
    }

    public get _blastRadius(): number{
        return this.blastRadius
    }

    
    public checkCollision(otherObjectList: CollidableObject[]): boolean{
        // if (this === otherObject) {
        // ***This condition will always return 'false' since the types 'this' and 'CollidableObject' have no overlap.ts(2367)**
        //     return false
        // }
        /*
        if (otherObject instanceof PlayerProjectile) {
            //this.radius
        }
        if (otherObject instanceof PowerUp) {
            //this._blastRadius
        }
        return true /*Tillagd för att få bort errors*/
        

        for(let otherObject of otherObjectList){

            if(otherObject instanceof PlayerProjectile){
                let pointDist = dist(this.x, this.y, otherObject.x, otherObject.y)
                if(this !== otherObject && pointDist < this.radius + otherObject.radius){
                    //console.log(otherObject)
                    //console.log('hit')
                    this.hasCollided = true;
                    otherObject.hasCollided = true; //sometimes the other object is not collided

                }
            }

            if(otherObject instanceof PowerUp){
                //powerUp code here
            }
        }

        return false
    }

    
    // Class functions
    public draw(): void {
        // Insert draw logic here
        push()
        fill(this.color);
        circle(this.x, this.y, this.radius*2)
        pop()
    }

    public updatePos(): number {
        // Insert position update logic here
        
        this.y += this.velY;
        this.x += this.velX;
        this.velY += this.projectileGravity;
        return 1
        
    }

}