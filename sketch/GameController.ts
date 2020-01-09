class GameController {
    // Class attributes //
    private target = new TargetGameCanvas(windowWidth / 2, windowHeight / 2);
    private collidableObjectManager = new CollidableObjectManager(this.target);
    private playerFactory = new PlayerFactory(this.collidableObjectManager)
    private startMenu = new StartMenu(width / 2, height * 1 / 7, this.playerFactory);
    private isGameStarted = false
    private isGameOver = false
    private timerCreated = false
    private timer: Timer = new Timer(1,1,1)
    private builtPlayers = false
    private buildGamePlayers: Array<_ply.GamePlayer> = []
    private powerUpExists = false
    private scoreboard = new Scoreboard(this.target);

    // Class methods //

    public updateGame(): void {
        // Draw startmenu unless game has started
        if (!this.isGameStarted) {
            this.mainMenu()
        }
        // Draw main game
        else if (this.isGameStarted && !this.isGameOver) {
            this.gameRunning()
        }
        else if (this.isGameOver) {
            if (this.scoreboard.getRestartGame) {// restart game
                this.restartGame()
            }
            else {
                this.scoreboard.draw();
            }
        }

    }

    private mainMenu(){
        this.startMenu.draw()
        this.startMenu.update()
        this.isGameStarted = this.startMenu.getStartGame()
    }

    private gameRunning(){
        
        this.setTimerOnStart()
        this.setPlayersOnStart()

        this.generatePowerUps()

        // Draw target and update target
        this.target.draw()
        this.target.updatePos()

        // Draw timer
        this.timer.draw()

        this.getAllPlayerInputAndDraw()

        this.collidableObjectManager.updatePos();
        this.collidableObjectManager.draw();
        
        this.checkIfGameOver()
    }

    private restartGame(){
        this.isGameOver = false;
        this.isGameStarted = false;
        this.target = new TargetGameCanvas(windowWidth / 2, windowHeight / 2);
        this.timer = new Timer(50, width / 2, height * 1 / 6);
        this.builtPlayers = false;
        this.timerCreated = false
        this.buildGamePlayers = [];
        this.collidableObjectManager = new CollidableObjectManager(this.target);
        this.playerFactory = new PlayerFactory(this.collidableObjectManager);
        this.startMenu = new StartMenu(width / 2, height * 1 / 7, this.playerFactory);
        this.scoreboard = new Scoreboard(this.target);
    }

    // helper functions

    private generatePowerUps() {
        this.powerUpExists = false
        for (const collidableObject of this.collidableObjectManager.getCollidableObjectList()) {
            if (collidableObject instanceof PowerUp) {
                this.powerUpExists = true

            }
        }

        if (!this.powerUpExists) {
            let randomDigit = round(random(1,300)) //random spawn delay if powerUp does not exist
            if(randomDigit === 150){
                const powerUp = new PowerUp(random(0, windowWidth), -50, 10, 10, 25, '#1aff1a', this.collidableObjectManager, this.powerUpTypeRandom() )
                this.collidableObjectManager.addCollidableObjectToList(powerUp)
            }
        }
    }

    private powerUpTypeRandom(){
        let randomNumber = Math.round(random(0,1))
        let powerUpString: PowerUpType
        
        if (randomNumber == 0){
            powerUpString = 'SpeedCanon'
        }else {
            powerUpString = 'SuperBlast'
        }
        return powerUpString
    }

    private setTimerOnStart(){
        if (!this.timerCreated) {
            this.timer = new Timer(this.startMenu.getSelectedTime(), width / 2, height * 1 / 6);
            this.timerCreated = true
        }
    }

    private setPlayersOnStart(){
        // If gameplayers aren't created, create gameplayer objects
        if (!this.builtPlayers) {
            let posIndex = windowWidth / (this.startMenu.getPlayers() + 2)
            let startIndex = posIndex / 2
            let posArray = []
            // Find positions for players and pass into the player objects as posArray
            for (let i = 0; i < this.startMenu.getPlayers(); i++) {
                startIndex += posIndex
                posArray.push({ x: startIndex, y: windowHeight })
            }
            this.buildGamePlayers = this.playerFactory.buildGamePlayer(this.startMenu.getPlayers(), posArray)
            this.builtPlayers = true
        }
    }

    private getAllPlayerInputAndDraw(){
        // Draw players, update players and maintain player controls
        this.buildGamePlayers.forEach(player => {
            player.draw()
            player.handleControls()
            if (keyIsDown(player.aimLeft[1]) || keyIsDown(player.aimRight[1]) || keyIsDown(player.fireButton[1])) {
                player.update()
            }
        });
    }

    private checkIfGameOver(){
        if (this.timer.getTimeLeft === 0) {
            this.isGameOver = true
        }
    }

}