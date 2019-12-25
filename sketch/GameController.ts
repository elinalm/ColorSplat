class GameController {
    // Class attributes //
    private startMenu =  new StartMenu(width/2, height*1/7); 
    private isGameStarted = false
    private target = new TargetGameCanvas(windowWidth/2,windowHeight/2);
    private collidableObjectManager = new CollidableObjectManager(this.target);
    private timerCreated = false
    private timer: Timer = new Timer(50, width / 2, height * 1/6)
    private playerFactory = new PlayerFactory(this.collidableObjectManager)
    private builtPlayers = false
    private buildGamePlayers: Array<_ply.GamePlayer> = []


    // private powerup = new PowerUp(random(0, windowWidth), -50, 0, 0, random(15, 50), 0)
    // private scoreboard = new Scoreboard(true)
    // private projectiles: PlayerProjectile[] = []
    
    // private scoreboard = new Scoreboard();
    // private target = new TargetGameCanvas( Behöver velX värde och velY värde );
    // private projectile = new PlayerProjectile( Behöver velX värde och velY värde );
    // private powerUp = new PowerUp( Behöver velX värde och velY värde );

    // Class functions //
            
    public updateGame(): void {
        if(!this.isGameStarted){
            this.startMenu.draw()
            this.startMenu.update()
            this.isGameStarted = this.startMenu.getStartGame()
        }
        else {
            if (!this.timerCreated) {
                this.timer = new Timer(this.startMenu.getSelectedTime(), width / 2, height * 1/6);
                this.timerCreated = true
            }
            // this.target.draw()
            this.timer.draw()

            if (!this.builtPlayers) {
                let posIndex = windowWidth/(this.startMenu.getPlayers()+2)
                let startIndex = posIndex/2
                let posArray = []
                for (let i = 0; i < this.startMenu.getPlayers(); i++) {
                    startIndex+=posIndex
                    posArray.push({x: startIndex, y: windowHeight})                    
                }
                this.buildGamePlayers = this.playerFactory.buildGamePlayer(this.startMenu.getPlayers(), posArray)
                this.builtPlayers = true
            }

            this.buildGamePlayers.forEach(player => {
                player.update()
                player.draw()
                player.handleControls()
            });
            
            this.collidableObjectManager.updatePos();
            this.collidableObjectManager.draw();
            //console.log(this.collidableObjectManager.getCollidableObjectList.length)
        }
        // this.checkCollisions()
    }

    // private checkCollisions() {
    //     for (const projectile of this.projectiles) {
    //         for (const otherProjectile of this.projectiles) {
    //             projectile.checkCollision(otherProjectile)
    //         }
    //     }
    // }
}

//     public mouseClicked(){
//         //console.log('mouse clicked')
//         this.target.mouseClicked();
//     }

//     public cannonPlayer() {
//         const colors: Array<string> = ["Pink", "Blue", "Green", "Red"]

//         let position: number = windowWidth / this.noOfPlayers

//         const baseMargin = position
//         const movePlayer = position / 2
//         for (let i = 0; i < this.noOfPlayers; i++) {
//             let cannons = new PlayerBody(colors[i], position - movePlayer, windowHeight)
//             position += baseMargin
//             cannons.draw()

//         }
//     }

//     public powerUp() {
//         // if (second() < 20 && second() > 10) {
//         //     this.powerup.draw()
//         //     this.powerup.updatePos()
//         // }
//         // if (second() < 40 && second() > 30) {
//             this.powerup.draw()
//             this.powerup.updatePos()
//         // }
//     }
// }
// }
