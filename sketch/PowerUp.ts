type PowerUpType = 'SuperBlast' | 'SpeedCanon'

class PowerUp implements MovingObject, CollidableObject {
    // Class attributes
    x: number
    y: number
    velX: number
    velY: number
    radius: number
    color: string
    cOM: PassByFire
    shouldBeRemoved: boolean = false

    private _type: PowerUpType
    public isSuperBlastPowerUp: boolean = false
    public isSpeedCannonPowerUp: boolean = false

    // Class constructor
    constructor (posX: number, posY:number, velX: number, velY: number, radius: number, color: string, cOM: PassByFire, type: PowerUpType) { 
        this.x = posX
        this.y = posY
        this.velX = velX
        this.velY = velY
        this.radius = radius
        this.color = color
        this.cOM = cOM
        this._type = type
    }

    public get type(): PowerUpType {
        return this._type
    }

    // Class functions
    public draw(): void {
        push()
        stroke(100);
        noStroke()
        fill(this.color);
        circle(this.x, this.y, this.radius*2);
        
        if(this._type == 'SuperBlast'){
            fill('red')
        }
        else {
            fill('yellow')
        }
        
        triangle(this.x - 10,this.y, this.x,this.y - 15, this.x + 10, this.y)
        // line(this.x - 20,this.y - 15,this.x + 20,this.y - 15)
        // line(this.x - 20,this.y - 15, this.x, this.y - 30)
        // line(this.x + 20,this.y - 15, this.x, this.y - 30)
        rect(this.x - 5,this.y,10,15)
        pop()
        
        this.x = this.x += random(-1,1);//random x-axis wiggle
        
        // Moving up at a constant speed
        this.y = this.y + 1;

    }

    // public checkCollision(otherObjectList: Array<CollidableObject>): void{
    //     // for (let i = 0; i < otherObjectList.length; i++){
    //     //     let otherObject = otherObjectList[i]
    //     //     if (otherObject instanceof PlayerProjectile) {
    //     //         let pointDist = dist(this.x, this.y, otherObject.x, otherObject.y)
    //     //         if (pointDist < this.radius + otherObject.radius) {
    //     //         }
    //     //     }
    //     // }


    //     // for (const otherObject of otherObjectList) {
    //     //     if (otherObject instanceof PlayerProjectile) {
    //     //         let pointDist = dist(this.x, this.y, otherObject.x, otherObject.y)
    //     //         if(pointDist < this.radius + otherObject.radius){
    //     //         console.log('träff');
                
    //     //         return true
    //     //         }
    //     //     }
    //     // }
    //     // return false
    // }

    public updatePos(): number {
    //     // Insert position update logic here
    //     //this.posY = this.posY + this.speed
    //     //this.speed = this.speed + gravity
        
    //     // this.draw()
        return 1
    //     //test text
    }
    

}