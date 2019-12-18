class TargetGameCanvas implements MovingObject {
    // Class attributes
    velX: number
    velY: number
    splashList: Array<{posX:number, posY:number, color: string}>
    targetCanvasPosX: number = 0;
    targetCanvasDirection: boolean = false;

    // Class constructor
    constructor (velX: number, velY: number) {
        this.velX = velX
        this.velY = velY
        this.splashList = [] //or new Array()
    }
    
    // Class functions
    public draw(): void {
        // Insert draw logic here
        this.updatePosition();
        this.drawBackground();
        this.drawTargetBoard();
        this.drawSplash();
        //this.testMissile();
    }

    public updatePos(): number {
        // Insert position update logic here
        return 1
    }

    private drawBackground(){
        let i:number = 0
        let stepHeight:number = 10;
        noStroke()
        while(i< windowHeight){
            fill(i/9,i/5,i/2);
            rect(0,i,windowWidth,i+stepHeight);
            i += stepHeight;
        }
    }

    private drawTargetBoard(){
        push()
        translate(this.targetCanvasPosX,0)
        fill(255)
        rect(windowWidth/4,windowHeight/4,windowWidth/2,windowHeight/2)
        pop();
    }

    private drawSplash(){
        push()
        translate(this.targetCanvasPosX,0)
        fill('green');
        circle(windowWidth/2,windowHeight/2,80);
        
        for(let splash of this.splashList){
            fill(splash.color);
            circle(splash.posX, splash.posY,60);
        }
        pop()
    }

    //TODO is click inside target box and full side to side motion.
    public mouseClicked(){
        this.isMissileInsideTarget(mouseX,mouseY)
        
        if(this.splashList.length > 3){
            this.splashList.shift();
        }
        //console.log(this.splashList);
        //console.log(this.targetCanvasPosX)
    }

    private updatePosition(){
        let moveBand = 500
        if(this.targetCanvasPosX > moveBand){
            this.targetCanvasDirection = true;
        }
        else if(this.targetCanvasPosX <= 0){
            this.targetCanvasDirection = false;
        }

        if(this.targetCanvasPosX >= 0 && this.targetCanvasDirection == false){
            this.targetCanvasPosX +=1;
        }
        else if(this.targetCanvasDirection == true){
            this.targetCanvasPosX -=1;
        }
    }

    //grey blob inside box, blue outside target canvas
    private isMissileInsideTarget(hitPosX:number, hitPosY:number){
        console.log(hitPosX,hitPosY);
        if(hitPosX > this.targetCanvasPosX + windowWidth/4 && hitPosX < this.targetCanvasPosX + windowWidth*0.75
            && hitPosY > windowHeight/4 && hitPosY < windowHeight*0.75)
            {
            this.splashList.push({posX:mouseX-this.targetCanvasPosX,posY:mouseY,color:'grey'})
        }
        else{
            this.splashList.push({posX:mouseX-this.targetCanvasPosX,posY:mouseY,color:'blue'})
        }
    }

    /* TODO P5 play
    private testMissile(){
        rect(0,this.targetCanvasPosX,60,60)
        let circle = createSprite(100,100)
    }*/

}