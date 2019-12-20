class StartMenu implements DrawableObject{
    // Class attribute
   // startgame: string = "hej"

    // private playerFactory = new PlayerFactory();
    private startGame = false 
    //private noOfPlayers = 3 
    private startButton: Button
    private x: number
    private y: number

    //private twoPlayersButton: Button

    //private playerButton = new Button();
    
    // Class constructor
    constructor (x: number, y: number) {
        this.startButton = new Button(width/2, height/2 + 110, 100, 50, "Start", this.startGame, 'blue')
        this.x = x
        this.y = y
        //this.twoPlayersButton = new Button(width/2, height/2 + 70, 100, 50, "2", this.startGame, 'blue')
    }

    public update(){
        this.startGame = this.startButton.handleMousePressed()
    }

    // Class functions
    public draw(): boolean {
        fill(0, 0, 0)
        //rectMode(CENTER)
        rect(0,0, windowWidth, windowHeight);
        textSize(30);
        fill(253, 228, 6);
        textFont('Orbitron, sans-serif');
        textAlign(CENTER)
        text("S", this.x, this.y);
        fill(255,165,0);
        text("p", this.x + 20, this.y);
        fill(255,0,0);
        text("l", this.x + 38, this.y);
        fill(75,0,130);
        text("a", this.x + 50, this.y);
        fill(0,0,205);
        text("t", this.x + 65, this.y);
        fill(255,255,255);
        textSize(30)
        textFont('Titillium Web, sans-serif');
        text("Color", this.x - 10, this.y - 25);
        
        /*fill(0,0,205)
        rect(600, 400, 70, 30, 10);
        textSize(12)
        fill(255, 255, 255)
        text("Player 1", 610, 420);
        fill(255,165,0)
        rect(700, 400, 70, 30, 10);
        textSize(12)
        fill(255, 255, 255)
        text("Player 2", 705, 420);
        fill(255,0,0)
        rect(800, 400, 70, 30, 10);
        textSize(12)
        fill(255, 255, 255)
        text("Player 3", 805, 420); */

        // textSize(25);
        // text("Players:", 680, 210);

        // textSize(23)
        // text("2", 680, 270);
        // text("3", 780, 270)
        
        fill(75,0,130)
        square(610, 150, 10);
        square (620, 140, 10);
        square (610, 140, 10);

        square(845, 150, 10);
        square (835, 140, 10);
        square (845, 140, 10);

        square(845, 300, 10);
        square (835, 310, 10);
        square (845, 310, 10);

        square(610, 300, 10);
        square (620, 310, 10);
        square (610, 310, 10);

        // fill(255, 255, 255)
        // textSize(20)
        // text("Objective:", 685, 600)

        fill(75,0,130);
        square(550, 550, 10);
        square (560, 550, 10);
        square (550, 560, 10);

        square(900, 550, 10);
        square (890, 550, 10);
        square (900, 560, 10);

        square(900, 710, 10);
        square (890, 720, 10);
        square (900, 720, 10);

        square(550, 710, 10);
        square (560, 720, 10);
        square (550, 720, 10);
   // }

    //private activateStartGame(): void {
        this.startButton.handleMousePressed()
        this.startButton.draw()
    
       if (this.startGame) {
           return true
        }
        return false
    } 

    

}
