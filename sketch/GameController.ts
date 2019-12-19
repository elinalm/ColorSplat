class GameController {
    // Class attributes //
    private startMenu =  new StartMenu();
    private twoPlayers = new Button();
    private threePlayers = new Button();
    private fourPlayers = new Button();
    // private timer = new Timer();
    // private scoreboard = new Scoreboard();
    // private target = new TargetGameCanvas( Behöver velX värde och velY värde );
    // private projectile = new PlayerProjectile( Behöver velX värde och velY värde );
    // private powerUp = new PowerUp( Behöver velX värde och velY värde );

    // Class constructor //

    // Class functions //
    public getPlayers() {
        return this.startMenu.getPlayers()
    }

    public game(): void {
        this.startMenu.draw()
    }
}

