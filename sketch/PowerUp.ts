class PowerUp implements MovingObject, CollidableObject {
    // Class attributes
    x: number
    y: number
    velX: number
    velY: number
    radius: number
    color: string
    cOM: PassByFire

    // Class constructor
    constructor (posX: number, posY:number, velX: number, velY: number, radius: number, color: string, cOM: PassByFire) { 
        this.x = posX
        this.y = posY
        this.velX = velX
        this.velY = velY
        this.radius = radius
        this.color = color
        this.cOM = cOM
    }

    // Class functions
    public draw(): void {
        push()
        stroke(50);
        fill('red');
        circle(this.x, this.y, this.radius);
        pop()
        
        this.x = this.x + 0;
        
        // Moving up at a constant speed
        this.y = this.y + 0.3;
    }

    public checkCollision(otherObjectList: Array<CollidableObject>): boolean{
        for (const otherObject of otherObjectList) {
            if (otherObject instanceof PlayerProjectile) {
                let pointDist = dist(this.x, this.y, otherObject.x, otherObject.y)
                if(pointDist < this.radius + otherObject.radius){
                console.log('yaaaay');
                return true
                }
            }
        }
        return false
    }

    public updatePos(): number {
    //     // Insert position update logic here
    //     //this.posY = this.posY + this.speed
    //     //this.speed = this.speed + gravity
        
    //     // this.draw()
        return 1
    //     //test text
    }
    

}