class StartMenu {
    // Class attributes
    private playerFactory = new PlayerFactory();
    private noOfPlayers = 4
    private createPlayers : Array<ply_.MenuPlayer> = this.playerFactory.buildMenuPlayer(this.noOfPlayers)
    // Class functions
    public draw(): void {
        let posIndex = windowWidth/(this.noOfPlayers+2)
        let startIndex = posIndex/2
        // let placeIndex = base/2
        this.createPlayers.forEach(player => {
            startIndex+=posIndex
            player.draw(startIndex, windowHeight/2)
        });
    }
    public getPlayers(){
        return this.createPlayers
    }
}