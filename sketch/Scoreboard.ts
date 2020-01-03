class Scoreboard implements DrawableObject {
    private hasRun: boolean = false
    private target: TargetGameCanvas
    delayOver: boolean = false
    private fadeCounter: number = 0
    restartGame: boolean = false
    targetCanvasCutoutImage: p5.Image = new p5.Image();

    private colorList: Array<{red: number, green: number, blue: number, fractionOfCanvas: number}> = []

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

            //for test , remove later
            this.testFillColorFractionList()
            this.sortColorFractionList()
            

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

    private testFillColorFractionList(){
        this.colorList.push({red: 0, green: 0, blue: 255, fractionOfCanvas: 2}) //blue
        this.colorList.push({red: 255, green: 0, blue: 0, fractionOfCanvas: 1}) //red
        this.colorList.push({red: 255, green: 255, blue: 255, fractionOfCanvas: 5}) //white
        this.colorList.push({red: 0, green: 255, blue: 0, fractionOfCanvas: 3}) //green
        
        console.log(this.colorList)
    }

    private sortColorFractionList(){

        //if white found, remove from list.
        for(let i = 0; this.colorList.length > i; i++){
            if(this.colorList[i].red == 255 && this.colorList[i].green == 255 && this.colorList[i].blue == 255){ 
                console.log('remove white background ' + this.colorList[i].fractionOfCanvas)
                this.colorList.splice(i,1)
            }
        }

        //sort list so most pixels are on top.
        this.colorList.sort((a, b)  => (b.fractionOfCanvas - a.fractionOfCanvas))
        console.log(this.colorList)
    }

    private drawWinnerList(){
        push()
        fill('blue')
        textSize(40)

        let spaceBetweenText = 0

        //loop over list and print winner.
        for(let i = 0; this.colorList.length > i; i++){
            if(i === 0){
                fill(this.colorList[i].red, this.colorList[i].green, this.colorList[i].blue)
                text("1st:  winner " + this.colorList[i].fractionOfCanvas,windowWidth/2,windowHeight*0.7 + spaceBetweenText)
                spaceBetweenText += 50;
            }
            if(i === 1){
                fill(this.colorList[i].red, this.colorList[i].green, this.colorList[i].blue)
                text("2nd:" + this.colorList[i].fractionOfCanvas,windowWidth/2,windowHeight*0.7 + spaceBetweenText)
                spaceBetweenText += 50;
            }
            if(i === 2){
                //3rd
            }
            if(i === 3){
                //4th
            }
        }
        pop()
    }
}