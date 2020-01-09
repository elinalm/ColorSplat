class TargetGameCanvas implements MovingObject {
    // Class attributes
    velX: number
    velY: number
    
    private splashList: Array<Splash>
    private targetCanvasPosX: number = 0;
    private targetCanvasPosY: number = 0;
    private targetCanvasWidth: number = 0;
    private targetCanvasHeight: number = 0;
    private targetCanvasDirection: boolean = false;
    private cutOutImage: p5.Image = new p5.Image();

    // Class constructor
    constructor (velX: number, velY: number) {
        this.velX = velX
        this.velY = velY
        
        this.splashList = [] //or new Array()
        this.setTargetCanvasSize();
    }
    
    // Class functions
    public draw(): void {
        this.updatePos();
        this.drawTargetBoard();     //Center white target.
        this.drawSplash();          //Redraw all splashes on target.
        this.drawFrameAroundTargetCanvas(); //draw frame ho cover splash overflow outside of canvas.
        this.drawCloud(windowWidth*0.75 , this.targetCanvasPosY/2) //Cloud upper right corner.
        this.drawLogo(windowWidth/4, windowHeight/8)    //Logo upper left corner.
    }

    //set target start position and size.
    private setTargetCanvasSize(){
        this.targetCanvasWidth = windowWidth/2;
        this.targetCanvasHeight = windowHeight/2;
        this.targetCanvasPosY = windowHeight/4;
    }

    private drawTargetBoard(){
        push();
        noStroke();
        fill(255);
        rect(this.targetCanvasPosX,this.targetCanvasPosY,this.targetCanvasWidth,this.targetCanvasHeight)
        pop();
    }

    private drawSplash(){
        push();
        for(let splash of this.splashList){
            noStroke();
            fill(`rgb(${splash.color})`);
            circle(splash.posX + this.targetCanvasPosX, splash.posY,splash.splashDiameter);
        }
        pop();
    }

    private drawFrameAroundTargetCanvas(){
        push()
        noStroke();
        fill(20,50,100);
        //draw top border
        rect(0,0,windowWidth,this.targetCanvasPosY)
        //draw bottom border
        rect(0, this.targetCanvasPosY + this.targetCanvasHeight, windowWidth, windowHeight - (this.targetCanvasPosY + this.targetCanvasHeight))
        //draw left border
        rect(0, this.targetCanvasPosY-1, this.targetCanvasPosX,this.targetCanvasHeight+2)
        //draw right border
        rect(this.targetCanvasPosX+this.targetCanvasWidth, this.targetCanvasPosY-1, windowWidth-(this.targetCanvasPosX+this.targetCanvasWidth), this.targetCanvasHeight+2)
        pop()

    }

    private drawCloud(xPos: number, yPos: number){
        push()
        noStroke()
        fill('white')
        ellipse(xPos,yPos,55,65)
        ellipse(xPos+30,yPos-10,55,65)
        ellipse(xPos+80,yPos,55,65)
        ellipse(xPos+20,yPos+20,55,65)
        ellipse(xPos+60,yPos+20,55,65)
        pop()
    }

    //from menu
    private drawLogo(logoX:number, logoY:number){
        push()
        //draw game-logo
        textSize(30);
        fill(253, 228, 6);
        textFont('Orbitron, sans-serif');
        textAlign(CENTER)
        text("S", logoX, logoY);
        fill(255,165,0);
        text("p", logoX + 20, logoY);
        fill(255,0,0);
        text("l", logoX + 38, logoY);
        fill(75,0,130);
        text("a", logoX + 50, logoY);
        fill(0,0,205);
        text("t", logoX + 65, logoY);
        fill(255,255,255);
        textSize(30)
        textFont('Titillium Web, sans-serif');
        text("Color", logoX - 10, logoY - 25);
        pop()
    }
    
    //Move target canvas left to right.
    public updatePos(){
        let moveBand = windowWidth/2
        let canvasSpeed = 1;
        if(this.targetCanvasPosX > moveBand){
            this.targetCanvasDirection = true;
        }
        else if(this.targetCanvasPosX <= 0){
            this.targetCanvasDirection = false;
        }

        if(this.targetCanvasPosX >= 0 && this.targetCanvasDirection == false){
            this.targetCanvasPosX += canvasSpeed;
        }
        else if(this.targetCanvasDirection == true){
            this.targetCanvasPosX -= canvasSpeed;
        }
    }

    //add splash to splashList if it's inside target canvas area.
    private isMissileInsideTarget(hitPosX:number, hitPosY:number, splashColor: string, splashDiameter: number){

        if(hitPosX > this.targetCanvasPosX - splashDiameter/2 && hitPosX < this.targetCanvasPosX + this.targetCanvasWidth + splashDiameter/2
            && hitPosY > this.targetCanvasPosY - splashDiameter/2 && hitPosY < this.targetCanvasPosY + this.targetCanvasHeight + splashDiameter/2)
        {
            this.splashList.push({posX:hitPosX - this.targetCanvasPosX,posY:hitPosY,color: splashColor,splashDiameter: splashDiameter})
        }
        else{
            //this.splashList.push({posX:mouseX - this.targetCanvasPosX,posY:mouseY,color:'blue',splashDiameter: 40})
        }

        //max nr of splashes in list
        if(this.splashList.length > 200){
            this.splashList.shift();
        }

    }

    // Call this to add splashes to canvas.
    public addSplashToTargetCanvas(splash: Splash){
        this.isMissileInsideTarget(splash.posX, splash.posY, splash.color, splash.splashDiameter);
    }

    private cutOutTargetCanvas(){
        this.cutOutImage = get(this.targetCanvasPosX,this.targetCanvasPosY,this.targetCanvasWidth,this.targetCanvasHeight);
        
    }
    
    public get getCutoutImage(): p5.Image{
        this.cutOutTargetCanvas();
        return this.cutOutImage
    }

    public getSplashList() {
        return this.splashList
    }
}