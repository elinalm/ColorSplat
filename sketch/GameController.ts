class GameController {
    // Class attributes //

    private startMenu =  new StartMenu();
    private timer = new Timer(50, width / 2, height * 1/6);
    //private scoreboard = new Scoreboard(true)

    // private scoreboard = new Scoreboard();
    // private target = new TargetGameCanvas( Behöver velX värde och velY värde );
    private target = new TargetGameCanvas(windowWidth/2,windowHeight/2);
    // private projectile = new PlayerProjectile( Behöver velX värde och velY värde );
    // private powerUp = new PowerUp( Behöver velX värde och velY värde );

    // Class constructor //

    // Class functions //
    public createStartMenu() {
        this.startMenu.update()
        this.startMenu.draw()
        
    }

    public drawTimer() {
        this.timer.draw()
    }

    // public goToScoreBoard() {
    //     this.scoreboard.draw()
    // }

    public startGame(): void {
    // This function starts the game and should be called in StartMenu via the StartGame interface
        
    }

    public drawFrame(){
        this.target.draw();
    }

    public mouseClicked(){
        //console.log('mouse clicked')
        this.target.mouseClicked();
    }

}