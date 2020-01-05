class TargetGameCanvas implements MovingObject {
    // Class attributes
    velX: number
    velY: number
    
    private splashList: Array<{posX:number, posY:number, color: string, splashDiameter: number}>
    private targetCanvasPosX: number = 0;
    private targetCanvasPosY: number = 0;
    private targetCanvasWidth: number = 0;
    private targetCanvasHeight: number = 0;
    private targetCanvasDirection: boolean = false;
    private cutOutImage: p5.Image = new p5.Image();
    //private pixelInCanvas: any

    // Class constructor
    constructor (velX: number, velY: number) {
        this.velX = velX
        this.velY = velY
        
        this.splashList = [] //or new Array()
        this.setTargetCanvasSize();
    }
    
    // Class functions
    public draw(): void {
        // Insert draw logic here
        
        this.updatePos();
        this.drawTargetBoard();     //empty target canvas drawn first
        this.drawSplash();          //then splashes
        this.drawFrameAroundTargetCanvas();

        //this.cutOutTargetCanvas();  //canvas is cut out to remove splashes outside target canvas
        //this.drawBackground();      //background is drawn over target canvas
        //this.drawTargetCutOutOnBackground();    //the cutout is added on top of background.

        //test remove later, draws blobs on canvas
        if(mouseIsPressed){
            this.mouseClicked();
        }
    }

    private setTargetCanvasSize(){
        this.targetCanvasWidth = windowWidth/2;
        this.targetCanvasHeight = windowHeight/2;
        this.targetCanvasPosY = windowHeight/4;
    }

    // private drawBackground(){
    //     let i:number = 0;
    //     let stepHeight:number = 10;
    //     push();
    //     noStroke();
    //     while(i< windowHeight){
    //         fill(i/9,i/5,i/2);
    //         rect(0,i,windowWidth,i+stepHeight);
    //         i += stepHeight;
    //     }
    //     pop();
    // }

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
        fill('blue');
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

    // private drawTargetCutOutOnBackground(){
    //     push();
    //     noStroke();
    //     image(this.cutOutImage,this.targetCanvasPosX,this.targetCanvasPosY);
    //     pop();
    // }

    //test for splash input TODO remove when done.
    public mouseClicked(){
        this.addSplashToTargetCanvas(mouseX, mouseY, 'green', random(30,120));
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
    public addSplashToTargetCanvas(hitPosX: number, hitPosY: number, splashColor: string, splashDiameter: number){
        this.isMissileInsideTarget(hitPosX, hitPosY, splashColor, splashDiameter);
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
    
    // public findPixelColorInTargetCanvas() {
    //     this.pixelInCanvas = get(this.targetCanvasPosX,this.targetCanvasPosY)
    //     let targetPixelX = this.targetCanvasPosX
    //     let targetPixelY = this.targetCanvasPosY
    //     let blue = 0;
    //     let purple = 0;
    //     let green = 0;
    //     let yellow = 0;
    //     let otherColor = 0
    //     targetPixelX --
    //     targetPixelY --

        

    //     for(let i=0; targetPixelX <= this.targetCanvasPosX + this.targetCanvasWidth; i++) {
    //         targetPixelY = this.targetCanvasPosY
    //         targetPixelX ++
    //         this.pixelInCanvas = get(targetPixelX,targetPixelY)
        
    //         for (let j=0; targetPixelY <= this.targetCanvasPosY + this.targetCanvasHeight; j++) {

    //             targetPixelY ++
    //             this.pixelInCanvas = get(targetPixelX, targetPixelY)
    //             if (this.pixelInCanvas[0] === 74 && this.pixelInCanvas[1] === 124 && this.pixelInCanvas[2] === 221 ) {
    //                 blue ++
                    
    //             } else if (this.pixelInCanvas[0] === 202 && this.pixelInCanvas[1] === 94 && this.pixelInCanvas[2] === 211 ) {
    //                 purple ++
    //             } else if (this.pixelInCanvas[0] === 102 && this.pixelInCanvas[1] === 233 && this.pixelInCanvas[2] === 69 ) {
    //                 green ++
    //             } else if (this.pixelInCanvas[0] === 231 && this.pixelInCanvas[1] === 255 && this.pixelInCanvas[2] === 87 ) {
    //                 yellow ++
    //             }

    //             if(this.pixelInCanvas[0] !== 255 && this.pixelInCanvas[1] !== 255 && this.pixelInCanvas[2] !== 255){
    //                 otherColor ++
    //             }
    //         }
            
            

    //     }

        // for(let j = 0; this.targetCanvasHeight > j; j++){

        //     for(let i = 0; this.targetCanvasWidth > i; i++){
        //         if(get(this.targetCanvasPosX + i, this.targetCanvasPosY + j )[0] !== 255 ){
        //             console.log(get(this.targetCanvasPosX + i, this.targetCanvasPosY + j) + 'line j '+ (j + this.targetCanvasPosY) +  " x "+ this.targetCanvasPosX + i)
        //         }  
        //     }      
        // }



    //     return [blue , purple, green, yellow, otherColor]
        
    // }

}