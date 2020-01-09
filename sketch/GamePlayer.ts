///<reference path="abstract-Player.ts" />
namespace _ply {
    export class GamePlayer extends Player implements DrawableObject{

        private angle = 180
        private barrelPos = 0
        private projectileExists = false
        private shouldFire = false
        private cOM: PassByFire
        private xPos : number
        private yPos : number
        private barrelPoint = {x: 0, y: 0}
        private cooldownValue = -180
        private hasSuperBlastPowerUp: boolean = false
        private blastRadius: number = 150
        private speedCannonPowerUp: number = 0
        private coolDownTime: number = 60;


        constructor (name: string, color: string, aimLeft: Array<string>, fireButton: Array<string>, aimRight: Array<string>, cOM: PassByFire, position: {x: number, y:number}) {
            super(name, color, aimLeft, fireButton, aimRight)
            this.cOM = cOM
            this.xPos = position.x
            this.yPos = position.y
        }

        setProjectileExists(status: boolean): void {
            this.projectileExists = status
        }
    
        // Class functions
        
        draw(): void { 
            //Barrel outline
            push()
            angleMode(DEGREES)
            noStroke()
            translate(this.xPos, this.yPos)
            rotate(this.angle)
            fill(`rgb(${this.color})`)
            rect((-20), this.barrelPos+10, 40, 85)
            pop()

            //Cannon head
            push()
            stroke(`rgb(${this.color})`)
            strokeWeight(5)
            fill('#1B1E1A')
            arc(this.xPos, this.yPos, 120, 120, PI, 0)
            pop()
            
            //Barrel body
            push()
            angleMode(DEGREES)
            noStroke()
            translate(this.xPos, this.yPos)
            rotate(this.angle)
            fill('#1B1E1A')
            rect((-15), (this.barrelPos) + 10, 30, 75)
            
            //Barrel head
            fill(`rgb(${this.color})`)
            rect((-25), (this.barrelPos + 85), 50, 15)
            pop()

            //Cooldown area
            push()
            angleMode(RADIANS)
            noStroke()
            // strokeWeight(3)
            // stroke('#30362f')
            fill(this.powerUpPlayerColor())
            arc(this.xPos, this.yPos, 80, 80, 0, PI*2)
            strokeWeight(6)
            stroke('#30362f')
            noFill()
            arc(this.xPos, this.yPos, 80, 80, 0, PI*2)
            strokeWeight(3)
            stroke(`rgb(${this.color})`)
            arc(this.xPos, (this.yPos), 80, 80, radians(-180), radians(this.cooldownValue))
            pop() 

        }

        update() /*: PlayerProjectile*/ {

            // Save barrels x position for projectile spawnpoint
            this.barrelPoint.x = this.xPos + ((this.angle-180)*1.6)
            // Save barrels y position for projectile spawnpoint
            this.barrelPoint.y = (this.yPos-100) + Math.pow((this.angle-180)*.3, 2)*.15
             
        }

        public handleControls() {
            // Controls for aiming left
            if (keyIsDown(this.aimLeft[1])) {
                if (this.angle >= 130) {
                    this.angle-=2
                }
            }
            // Controls for aiming right
            if (keyIsDown(this.aimRight[1])) {
                if (this.angle <= 230) {
                    this.angle+=2
                }
            }
            // Controls for fire button
            if (keyIsDown(this.fireButton[1])) {
                
                if (this.projectileExists === true && !this.shouldFire) {
                    console.log('exploding projectile');
                    this.explodeProjectile()
                }
                
                else if (this.projectileExists === false) {
                    this.loadBarrel()
                    this.shouldFire = true
                }
            }
            if ((!keyIsDown(this.fireButton[1]) && this.shouldFire)) {
                this.shootProjectile()
                this.barrelPos = 0
                this.projectileExists = true
                this.shouldFire = false 
                
            }
        }

        private explodeProjectile() {
            const projectileArray = this.cOM.getCollidableObjectList()
            for (let i = 0; i < projectileArray.length; i++){
                const projectile = projectileArray[i] as PlayerProjectile

                if (projectile.color === this.color && projectile.getHasExploded() === false) {
                    projectile.setHasExploded(true)

                    if(this.hasSuperBlastPowerUp === true){
                        this.cOM.target.addSplashToTargetCanvas(projectile.x, projectile.y, projectile.color, this.blastRadius*2)
                        this.hasSuperBlastPowerUp = false
                        console.log('add power splash')                                                        
                    }
                    else{
                        this.cOM.target.addSplashToTargetCanvas(projectile.x, projectile.y, projectile.color, this.blastRadius) 
                        console.log('normal splash')
                    }
                    this.coolDownTime = (this.speedCannonPowerUp > 0) ? 30 : 60

                    let cooldown = this.coolDownTime


                    let cooldownTimer = setInterval( ()=> {
                        cooldown--
                        
                        this.cooldownValue += 180/this.coolDownTime

                        // If cooldown is done
                        if (cooldown === 0) {
                            // Clear interval
                            clearInterval(cooldownTimer)
                            // Reset cooldownActive and value
                            this.cooldownValue = -180
                            // Remove projectile
                            this.projectileExists = false
                            projectile.shouldBeRemoved = true
                        }
                    }, 10)
                }
            }
        }
        
        private loadBarrel() {
            if (this.barrelPos > -20) {
                        
                if (this.barrelPos > -10) {
                    this.barrelPos -= .3

                }
                else if (this.barrelPos < -10) {
                    this.barrelPos -= .1
                    if (this.barrelPos < -19) {
                        this.barrelPos = -18
                    }
                }
            }  
        }
        
        private shootProjectile() {
            console.log('shooting projectile');
            const projectile = new PlayerProjectile((this.angle-180)*(this.barrelPos*-.015),(this.barrelPos),this.color,this.barrelPoint.x, this.barrelPoint.y, 10, this)
            this.cOM.addCollidableObjectToList(projectile)
            this.speedCannonPowerUp = (this.speedCannonPowerUp <= 0) ? this.speedCannonPowerUp = 0 : this.speedCannonPowerUp -= 1
            console.log(this.speedCannonPowerUp);
            
        }     
           
        // Gets called from PlayerProjectile in checkCollision if projectile collides with PowerUp
        public applyPowerUp (powerUp: PowerUp) {
            const type = powerUp.type
            
            if(type === 'SuperBlast'){
                this.hasSuperBlastPowerUp = true
            }
            else if(type === 'SpeedCanon'){
                this.speedCannonPowerUp = 3
            }
        }

        private powerUpPlayerColor(): string{
            if(this.hasSuperBlastPowerUp){
                return '#B933F4' //purple
            }
            if(this.speedCannonPowerUp > 0){
                if(this.speedCannonPowerUp === 3){
                    return '#F4E533' //yellow
                }
                else if(this.speedCannonPowerUp === 2){
                    return '#F49933'    //orange
                }
                else if(this.speedCannonPowerUp === 1){
                    return '#F44A33'    //dark orange
                }
                else{
                    return '#1B1E1A'    //grey black
                }
            }
            else{
                return '#1B1E1A'
            }
        }
        
    }
}


