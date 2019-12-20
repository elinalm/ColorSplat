class GameController {
    // Class attributes //
    private startMenu =  new StartMenu(); 
    private isGameStarted = false
    // private timer = new Timer();

    private timer = new Timer(50, width / 2, height * 1/6);
    private noOfPlayers: number = 4 // istället för 3 så kommer input av användaren
    private powerup = new PowerUp(random(0, windowWidth), -50, 0, 0, random(15, 50), 0)
    //private scoreboard = new Scoreboard(true)
    
    // private scoreboard = new Scoreboard();
    // private target = new TargetGameCanvas( Behöver velX värde och velY värde );
    private target = new TargetGameCanvas(windowWidth/2,windowHeight/2);
    // private projectile = new PlayerProjectile( Behöver velX värde och velY värde );
    // private powerUp = new PowerUp( Behöver velX värde och velY värde );

    // Class functions //
    // public createStartMenu() {
        //     this.startMenu.update()
        //     this.startMenu.draw()
        
        // }
        
        public drawTimer() {
            
        }
        
        // public goToScoreBoard() {
            //     this.scoreboard.draw()
            // }
            
            public startGame(): void {
                if(!this.isGameStarted){
                    this.isGameStarted = this.startMenu.draw()
                    this.startMenu.update()
                }
                else {
                    this.target.draw()
                    this.timer.draw()
        }
       
    // This function starts the game and should be called in StartMenu via the StartGame interface
        
    }

    public drawFrame(){
        
    }

    public mouseClicked(){
        //console.log('mouse clicked')
        this.target.mouseClicked();
    }

    public cannonPlayer() {
        const colors: Array<string> = ["Pink", "Blue", "Green", "Red"]

        let position: number = windowWidth / this.noOfPlayers

        const baseMargin = position
        const movePlayer = position / 2
        for (let i = 0; i < this.noOfPlayers; i++) {
            let cannons = new PlayerBody(colors[i], position - movePlayer, windowHeight)
            position += baseMargin
            cannons.draw()

        }
    }

    public powerUp() {
        // if (second() < 20 && second() > 10) {
        //     this.powerup.draw()
        //     this.powerup.updatePos()
        // }
        // if (second() < 40 && second() > 30) {
            this.powerup.draw()
            this.powerup.updatePos()
        // }
    }
}