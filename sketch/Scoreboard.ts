class Scoreboard implements DrawableObject {
    private hasRun: boolean = false
    private target: TargetGameCanvas
    delayOver: boolean = false
    private fadeCounter: number = 0
    restartGame: boolean = false
    targetCanvasCutoutImage: p5.Image = new p5.Image();

    private colorScoreList: Array<{playerColor: string, pixelCount: number}> = []

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

            //console.log('blue purple green yellow other ' + this.target.findPixelColorInTargetCanvas()+ ' from scoreboard')

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

        this.drawWinnerList()
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
        targetImage.loadPixels()
        console.log('target nr of pixels ' + targetImage.pixels.length/4)
        let otherColor = 0
        let blue = 0
        let green = 0
        let purple = 0
        let yellow = 0

        for(let i = 0; targetImage.pixels.length > i; i += 4){
            if(targetImage.pixels[i] !== 255 && targetImage.pixels[i+1] !== 255 && targetImage.pixels[i+2] !== 255){
                otherColor ++
            }
            if(targetImage.pixels[i] === 74 && targetImage.pixels[i+1] === 124 && targetImage.pixels[i+2] === 221){
                blue ++
            }
            if(targetImage.pixels[i] === 102 && targetImage.pixels[i+1] === 233 && targetImage.pixels[i+2] === 69){
                green ++
            }
            if(targetImage.pixels[i] === 202 && targetImage.pixels[i+1] === 94 && targetImage.pixels[i+2] === 211){
                purple ++
            }
            if(targetImage.pixels[i] === 231 && targetImage.pixels[i+1] === 255 && targetImage.pixels[i+2] === 87){
                yellow ++
            }
        }
        console.log('blue: ' + blue + ' purple: ' + purple + ' green: ' + green  + ' yellow: ' + yellow + ' other ' + otherColor)
        
        this.colorScoreList.push({playerColor: 'blue', pixelCount: blue})
        this.colorScoreList.push({playerColor: 'green', pixelCount: green})
        this.colorScoreList.push({playerColor: 'purple', pixelCount: purple})
        this.colorScoreList.push({playerColor: 'yellow', pixelCount: yellow})
        
        this.colorScoreList.sort((a,b) => (b.pixelCount - a.pixelCount))
        console.log(this.colorScoreList)
    }

    private drawWinnerList(){
        push()
        fill('blue')
        textSize(40)

        let spaceBetweenText = 0
        if(this.colorScoreList[0].pixelCount !== 0){
            fill(this.colorScoreList[0].playerColor)
            text("1st: " + this.colorScoreList[0].pixelCount, windowWidth/2,windowHeight*0.7 + spaceBetweenText)
            spaceBetweenText += 50;
        }
        if(this.colorScoreList[1].pixelCount !== 0){
            fill(this.colorScoreList[1].playerColor)
            text("2nd: " + this.colorScoreList[1].pixelCount, windowWidth/2,windowHeight*0.7 + spaceBetweenText)
            spaceBetweenText += 50;
        }
        if(this.colorScoreList[2].pixelCount !== 0){
            fill(this.colorScoreList[2].playerColor)
            text("3rd: " + this.colorScoreList[2].pixelCount, windowWidth/2,windowHeight*0.7 + spaceBetweenText)
            spaceBetweenText += 50;
        }

        if(this.colorScoreList[3].pixelCount !== 0){
            fill(this.colorScoreList[3].playerColor)
            text("4th: " + this.colorScoreList[3].pixelCount, windowWidth/2,windowHeight*0.7 + spaceBetweenText)
            spaceBetweenText += 50;
        }

        pop()
    }
}