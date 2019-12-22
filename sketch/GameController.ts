class GameController {
    // Class attributes //
    private startMenu =  new StartMenu(width/2, height*1/7); 
    private isGameStarted = false
    private target = new TargetGameCanvas(windowWidth/2,windowHeight/2);
    private timer = new Timer(50, width / 2, height * 1/6);
    private playerFactory = new PlayerFactory()
    private createPlayers: Array<_ply.GamePlayer> = []

    private collidableObjectManager = new CollidableObjectManager(this.target);

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
            this.target.draw()
            this.timer.draw()
            // this.startMenu.getPlayers
            const buildGamePlayers = this.playerFactory.buildGamePlayer(this.startMenu.getPlayers())
            let posIndex = windowWidth/(buildGamePlayers.length+2)
            let startIndex = posIndex/2
            buildGamePlayers.forEach(player => {
            startIndex+=posIndex
            player.draw(startIndex, windowHeight)
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
