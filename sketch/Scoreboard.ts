class Scoreboard implements DrawableObject {
    private hasRun: boolean = false
    private target: TargetGameCanvas
    delayOver: boolean = false
    private fadeCounter: number = 0
    restartGame: boolean = false
    targetCanvasCutoutImage: p5.Image = new p5.Image();

    constructor(target: TargetGameCanvas){
        this.target = target
    }
    // Class attributes
    // private goToScoreBoardTrue: boolean;
    // private button = new Button();

    // Class constructor
    // constructor(goToScoreBoardTrue: boolean) {
    //     this.goToScoreBoardTrue = goToScoreBoardTrue;
    // }
    // Class functions
    public draw(): void {
        // Insert draw logic here
        // if(this.goToScoreBoardTrue === true) {
        //     console.log("Test")
        // }
        
        if(!this.hasRun){ //run once when started
            this.target.draw()// draw one last clean targetCanvas for scoreboard.
            this.targetCanvasCutoutImage = this.target.getCutoutImage;
            this.countPixelsInTarget(this.targetCanvasCutoutImage)
            this.hasRun = true;
            this.restartGame = false // reset from restart
            setTimeout( () =>{this.delayOver = true;}, 3000);
        }

        if(!this.delayOver){
            this.fadeOutOldCanvas();
        }
        
        if(this.delayOver){ //fade to scoreboard
            this.drawHolder()
        }

        //Mouse press restart game until something better is implemented.
        if(mouseIsPressed){// return to menu
            this.backToMainMenu();
        }

    }

    //This is run after fadeout.
    private drawHolder(){
        this.drawBackground();
        this.drawOldTargetCanvas();
        this.drawText();
        //this.countPixelsInTarget(this.target.getCutoutImage)

    }

    //add background effects here.
    private drawBackground(){
        push()
        this.fadeCounter += 0.2
        background(this.fadeCounter % 255);
        pop();       
    }

    //Draws out old target canvas, can have effects too.
    private drawOldTargetCanvas(){
        push()
        image(this.targetCanvasCutoutImage,windowWidth/4,windowHeight/16);
        pop()
    }

    //just some info text
    private drawText(){
        push();
        textSize(30);
        fill('grey')
        text('Click to restart' , windowWidth/2,windowHeight/2)
        pop();        
    }

    // Add increasing Alpha background on top of old canvas. 
    private fadeOutOldCanvas(){
        push()
        this.fadeCounter +=0.2;
        fill(0,0,0,this.fadeCounter);
        rect(0,0,windowWidth,windowHeight);
        pop()
    }

    //Resets all original values on reset.
    private backToMainMenu(){
        console.log("restart game")
        this.hasRun = false;
        this.delayOver = false;
        this.fadeCounter = 0;
        this.targetCanvasCutoutImage = new p5.Image();        
        this.restartGame = true;
    }


    public get getRestartGame(): boolean{
        return this.restartGame;
    }


    private countPixelsInTarget(targetImage: p5.Image){
        console.log(targetImage.width+ " " + targetImage.height + ' img w h');
        //let colorList[]
        push()
        targetImage.loadPixels()
        console.log('target nr of pixels ' + targetImage.pixels.length/4)
        console.log(targetImage.pixels[0]+targetImage.pixels[1]+targetImage.pixels[2])
        
        for(let i = 0; /*targetImage.pixels.length*/ 24 > i; i++){
            console.log(targetImage.pixels[i])
        }

        pop()
    }
}