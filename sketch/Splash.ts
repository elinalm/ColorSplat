class Splash implements DrawableObject {
    //Class attributes
    private x: number
    private y: number
    private color: string
    private splashDiameter: number
    private splatterArray: Array<Splatter>

    //Class constructor
    constructor(x: number, y: number, color: string, splashDiameter: number) {
        this.x = x
        this.y = y
        this.color = color
        this.splashDiameter = splashDiameter
        this.splatterArray = this.generateSplatterArray()
    }

    //Class functions
    public draw(canvasX: number) {
        const realX = this.x + canvasX
        noStroke();
        fill(`rgb(${this.color})`);
        circle(realX, this.y, this.splashDiameter);
        this.drawSplatter(canvasX)
    }

    private generateSplatterArray(): Array<Splatter> {
        const rngSplat = random(3, 12);
        let  splatterList: Array<Splatter> = []
        
        for (let i = 0; i < rngSplat; i++) {
            const   rngNumber = random(.1, .6),
                    rngMod = rngNumber * rngNumber,
                    rngDiameter = this.splashDiameter * rngMod,
                    position: {x: number, y: number} = this.generateSplatterPosition(rngSplat, rngDiameter, i),
                    {x, y} = position;
            
            splatterList.push({x: x, y: y, diameter: rngDiameter})
        }
        
        return splatterList
    }

    private generateSplatterPosition(noOfSplat: number, diameter: number, index: number) {
        push()
        angleMode(RADIANS)
        const   rngModifier = random(1, 2),
                posMod = (this.splashDiameter - diameter * 2.5)*.3,
                dotJump = noOfSplat - rngModifier,
                angle = (2 * Math.PI / dotJump * index),
                x = this.x + (this.splashDiameter/3 + posMod) * Math.cos(angle),
                y = this.y + (this.splashDiameter/3 + posMod) * Math.sin(angle),
                position = {x, y};
        return position
        pop()
    }

    private drawSplatter(canvasX: number) {
        this.splatterArray.forEach(splatter => {
            push()
            noStroke()
            fill(`rgb(${this.color})`)
            circle(splatter.x+canvasX, splatter.y, splatter.diameter)
            pop()
        });
    }
}