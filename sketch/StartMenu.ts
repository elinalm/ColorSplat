class StartMenu implements DrawableObject{
    // Class attribute
   // startgame: string = "hej"

    // private playerFactory = new PlayerFactory();
    private startGame = false 
    //private noOfPlayers = 3 
    private startButton: Button
    //private twoPlayersButton: Button

    //private playerButton = new Button();
    
    // Class constructor
    constructor () {
        this.startButton = new Button(width/2, height/2 + 110, 100, 50, "Start", this.startGame, 'blue')
        //this.twoPlayersButton = new Button(width/2, height/2 + 70, 100, 50, "2", this.startGame, 'blue')
    }

    public update(){
        this.startGame = this.startButton.handleMousePressed()
    }

    // Class functions
    public draw(): void {
        fill(0, 0, 0)
        // rectMode(CENTER)
        rect(windowWidth/4, 0, windowWidth / 2, windowHeight);
        textSize(30);
        fill(253, 228, 6);
        textFont('Orbitron, sans-serif');
        text("S", windowWidth/2 - 2, windowHeight - 680);
        fill(255,165,0);
        text("p", windowWidth/2 + 20, windowHeight - 680);
        fill(255,0,0);
        text("l", windowWidth/2 + 40, windowHeight - 680);
        fill(75,0,130);
        text("a", windowWidth/2 + 45, windowHeight - 680);
        fill(0,0,205);
        text("t", windowWidth/2 + 65, windowHeight - 680);
        fill(255,255,255);
        textSize(30)
        //textFont('Titillium Web, sans-serif');
        text("Color", windowWidth/2 - 70, windowHeight - 700);
        
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

        textSize(25);
        text("Players:", 680, 210);

        textSize(23)
        text("2", 680, 270);
        text("3", 780, 270)
        
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

        fill(255, 255, 255)
        textSize(20)
        text("Objective:", 685, 600)

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
    
       if (!this.startGame) {
            this.startButton.draw()
        }
    } 

    

}
