class TargetGameCanvas implements MovingObject {
    // Class attributes
    velX: number
    velY: number

    // Class constructor
    constructor (velX: number, velY: number) {
        this.velX = velX
        this.velY = velY
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