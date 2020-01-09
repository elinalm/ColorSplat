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
            fill('#B933F4')
        }
        else {
            fill('yellow')
        }
        
        triangle(this.x - 10,this.y, this.x,this.y - 15, this.x + 10, this.y)
        rect(this.x - 5,this.y,10,15)
        pop()
        
        this.x = this.x += random(-1,1);//random x-axis wiggle
        
        // Moving up at a constant speed
        this.y = this.y + 1;

    }

    public updatePos(): number {
        return 1
    }
    

}