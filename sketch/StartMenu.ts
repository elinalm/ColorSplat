class StartMenu implements DrawableObject {
    // Class attribute
    private playerFactory = new PlayerFactory();
    private noOfPlayers = 4
    private isMousePressed = false
    private bgColor = '#1B1E1A'
    private playerSelectButton = new _btn.RadioButton(windowWidth/2, windowHeight/3, windowWidth/2, 100, this.bgColor, this.isMousePressed, [2, 3, 4], this.noOfPlayers);
    private createPlayers : Array<_ply.MenuPlayer> = []
    private startGame = false 
    private startButton = new _btn.BoolButton(width/2, height/2 + height/10, 100, 50, 'blue', 'Start', this.startGame)
    private x: number
    private y: number

    //private twoPlayersButton: Button

    //private playerButton = new Button();
    
    // Class constructor
    constructor (x: number, y: number) {
        // this.startButton = new Button(width/2, height/2 + 110, 100, 50, "Start", this.startGame, 'blue')
        this.x = x
        this.y = y
        //this.twoPlayersButton = new Button(width/2, height/2 + 70, 100, 50, "2", this.startGame, 'blue')
    }

    public getStartGame(): boolean{
        return this.startGame
    }

    public getPlayers(): number {
        return this.noOfPlayers
    }

    public update(): void {
        this.startGame = this.startButton.handleMousePressed()
        this.noOfPlayers = this.playerSelectButton.handleMousePressed()   
    }

    // Class functions
    public draw(): void {
        push()
        //draw background
        fill(0, 0, 0)
        rect(0,0, windowWidth, windowHeight);
        
        //draw menubody
        fill(this.bgColor)
        rect(windowWidth/5, 0, windowWidth/1.666, windowHeight)
        
        //draw game-logo
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
        pop()
        
        //Draw players section
        push()
        noStroke()
        fill(this.bgColor)
        rect((windowWidth/2)- 100, (windowHeight/3.8) - 50, 200, 100);
        textAlign(CENTER)
        textSize(40)
        fill(255, 255, 255)
        text("Players", (windowWidth/2), (windowHeight/3.8));

        this.createPlayers = []
        this.createPlayers = this.playerFactory.buildMenuPlayer(this.noOfPlayers)

        let posIndex = windowWidth/(this.noOfPlayers+2)
        let startIndex = posIndex/2
        this.createPlayers.forEach(player => {
            startIndex+=posIndex
            player.draw(startIndex, windowHeight/2)
        });
        this.playerSelectButton.draw()
        pop()

        //Draw startbutton
        this.startButton.draw()
    }
}

