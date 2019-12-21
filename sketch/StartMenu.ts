class StartMenu {
    // Class attributes
    private playerFactory = new PlayerFactory();
    private noOfPlayers = 4
    private startGame = false
    private playerSelectButton = new _btn.RadioButton(windowWidth/2, windowHeight/3, windowWidth/2, 100, 'red', this.startGame, [2, 3, 4], this.noOfPlayers);
    private createPlayers : Array<ply_.MenuPlayer> = []

    public update(){
        this.noOfPlayers = this.playerSelectButton.handleMousePressed()        
    }
    // Class functions
    public draw(): void {
        this.createPlayers = []
        this.createPlayers = this.playerFactory.buildMenuPlayer(this.noOfPlayers)
        fill('black')
        rect(0, 0, windowWidth*2, windowHeight*2)

        let posIndex = windowWidth/(this.noOfPlayers+2)
        let startIndex = posIndex/2
        this.createPlayers.forEach(player => {
            startIndex+=posIndex
            player.draw(startIndex, windowHeight/2)
        });
        this.playerSelectButton.draw()
    }
}