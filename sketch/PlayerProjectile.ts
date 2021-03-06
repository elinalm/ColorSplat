class PlayerProjectile implements MovingObject, CollidableObject {
    // Class attributes
    velX: number
    velY: number
    color: string
    explosionValue = 200
    radius: number
    x: number
    y: number
    private projectileGravity: number = 0.2
    blastRadius: number
    ownerPlayer: PlayerFromProjectile
    hasExploded: boolean = false
    shouldBeRemoved: boolean = false
    
    // Class constructor
    constructor (velX: number, velY: number, color: string , x: number, y: number, blastRadius: number, player: PlayerFromProjectile)/* applyPowerUpCallback: () => void) */{
        this.velX = velX
        this.velY = velY + (velX*velX)*.03
        this.color = color
        this.x = x
        this.y = y
        this.radius = 15
        this.blastRadius = blastRadius
        this.ownerPlayer = player
    }

    public getOwnerPlayer(): PlayerFromProjectile {
        return this.ownerPlayer
    }

    public getHasExploded(): boolean {
        return this.hasExploded
    }

    public setHasExploded(status: boolean) {
        this.hasExploded = status
    }
    
    
    public checkCollision(otherObjectList: CollidableObject[]): void{        

        for(let otherObject of otherObjectList){

            let pointDist = dist(this.x, this.y, otherObject.x, otherObject.y)
                if(this !== otherObject && pointDist < this.radius + otherObject.radius){

                    if(otherObject instanceof PlayerProjectile){
                    
                            // Make sure that projectiles doesn't get stuck inside eachother
                            const overlap = (this.radius + otherObject.radius) - pointDist // Find out overlap
                    
                            // Move projectiles out of overlap so that they get unstuck
                            // If, in any case, projectiles share same x or y position values
                            if (this.y === otherObject.y || this.x === otherObject.x) {
                                if (this.y === otherObject.y) {
                                    if (this.x > otherObject.x) {
                                        this.x += overlap/2
                                        otherObject.x -= overlap/2
                                    }
                                    else {
                                        this.x -= overlap/2
                                        otherObject.x += overlap/2
                                    }
                                }
                                else {
                                    if (this.y > otherObject.y) {
                                        this.y += overlap/2
                                        otherObject.y -= overlap/2
                                    }
                                }
                            }
                            // Else, move x and y coordinates according to the overlap
                            else {
                                if (this.y > otherObject.y) { 
                                    this.y += overlap/4
                                    otherObject.y -= overlap/4
                                }
                                else {
                                    this.y -= overlap/4
                                    otherObject.y += overlap/4
                                }
                                if (this.x > otherObject.x) {
                                    this.x += overlap/4
                                    otherObject.x -= overlap/4
                                }
                                else {
                                    this.x -= overlap/4
                                    otherObject.x += overlap/4
                                }
                            }

                    // Exchange values between colliding objects, to make them bounce against eachother
                            const   objectAVel = {x: this.velX, y: this.velY},
                                    objectBVel = {x: otherObject.velX, y: otherObject.velY};

                            this.velX = objectBVel.x
                            this.velY = objectBVel.y
                    
                            otherObject.velX = objectAVel.x
                            otherObject.velY = objectAVel.y
                            
                        }
                        if(otherObject instanceof PowerUp){
                            //powerUp code here
                            
                        this.ownerPlayer.setProjectileExists(false)
                        this.ownerPlayer.applyPowerUp(otherObject)
                        this.shouldBeRemoved = true;
                        otherObject.shouldBeRemoved = true;
                        
                        }
                    }

        }
    }

    
    // Class functions
    public draw(): void {
        // Insert draw logic here
        push()
        if (this.hasExploded) {
            noStroke()
            const colors = this.color.split(',')           
            fill(parseInt(colors[0]), parseInt(colors[1]), parseInt(colors[2]), this.explosionValue)
            circle(this.x, this.y, this.radius*(this.explosionValue*.02)+100)
        }   
        else {
            stroke('#1B1E1A')
            fill(`rgb(${this.color})`);
            circle(this.x, this.y, this.radius*2)
        }   
        pop()    
    }
    
    public updatePos() {
        // Insert position update logic here
        // If projectile isn't exploded, update position
        if (!this.hasExploded) {
            this.explosionValue = 200
            this.y += this.velY;
            this.x += this.velX;
            this.velY += this.projectileGravity; 
        }
        else {
            this.explosionValue-=4
        }
    }

}