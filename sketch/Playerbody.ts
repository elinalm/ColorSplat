class PlayerBody {

    color: string
    xPos: number
    yPos: number
    canMove: boolean


    constructor(color: string, xPos: number, yPos: number) {
        this.color = color
        this.xPos = xPos
        this.yPos = yPos
        this.canMove = false
    }

    public update() {
        this.draw()
        this.moveBarrel()
        this.shoot()
    }

    public draw() {
        push()
        stroke(this.color)
        strokeWeight(5)
        line(this.xPos - 70, this.yPos, this.xPos - 70, this.yPos - 50)
        line(this.xPos - 70, this.yPos - 50, this.xPos - 60, this.yPos - 50)
        arc(this.xPos - 20, this.yPos - 52, 80, 80, PI, 0)
        line(this.xPos + 20, this.yPos - 50, this.xPos + 30, this.yPos - 50)
        line(this.xPos + 30, this.yPos - 50, this.xPos + 30, this.yPos)
        strokeWeight(1)
        arc(this.xPos - 20, this.yPos - 52, 60, 60, PI, 300)
        strokeWeight(2)
        rect(this.xPos - 27.5, this.yPos - 125, 15, 35)
        fill(this.color)
        rect(this.xPos - 30, this.yPos - 135, 20, 15)
        pop()
        push()
        stroke(this.color)
        rect(this.xPos + 50, this.yPos - 51, 15, 45)
        pop()
    }

    public moveBarrel() {
            
    }

    public shoot() {
    }
}
