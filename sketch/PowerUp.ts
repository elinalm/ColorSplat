class PowerUp implements MovingObject {
    // Class attributes
    posX: number
    posY: number
    velX: number
    velY: number
    size: number
    speed: number

    // Class constructor
    constructor (posX: number, posY:number, velX: number, velY: number, size:number, speed:number) { 
        this.posX = posX
        this.posY = posY
        this.velX = velX
        this.velY = velY
        this.size = size
        this.speed = speed
    }

    // Class functions
    public draw(): void {
        push()
        fill(230,120,60)
        noStroke()
        ellipse(this.posX,this.posY,this.size)
        pop()
        // Insert draw logic here
    }

    public updatePos(): number {
        // Insert position update logic here
        this.posY = this.posY + this.speed
        this.speed = this.speed + gravity
        clear()
        this.draw()
        return 1
        //test text
    }
    

}