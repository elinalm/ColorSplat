class CollidableObjectManager {
    private collidableObjectList: Array<CollidableObject> = [];
    public target: DrawExplosions

    constructor(target: DrawExplosions){
        this.addTestMissiles(); //remove later, just for test
        this.target = target;   //import target to draw splash on canvas
    }

    public updatePos(){
        
        for(let collidableObject of this.collidableObjectList){
            collidableObject.updatePos();
            if (collidableObject instanceof PlayerProjectile) {
                collidableObject.checkCollision(this.collidableObjectList)
            }
        }
        this.removeCollidedObjects(); //remove missiles and draw splash
    }

    private removeCollidedObjects(){
        for(let i = 0; i < this.collidableObjectList.length; i++){

            // If Projectile has collided with PowerUp
            if(this.collidableObjectList[i].projectileAndPowerUpCollision === true /*&& this.collidableObjectList[i] instanceof PowerUp*/){
                this.removeCollidableObjectFromList(i)
            }
            // If projectile moves out of window view
            if (this.collidableObjectList[i] instanceof PlayerProjectile) {
                if(this.collidableObjectList[i].x > windowWidth || this.collidableObjectList[i].x < 0 || this.collidableObjectList[i].y > windowHeight) {
                    
                    const   projectile = this.collidableObjectList[i] as PlayerProjectile,
                            player = projectile.getOwnerPlayer();
                            
                            
                    //Säger till spelaren att projektilen inte längre existerar, så att spelaren kan skjuta ett nytt skott (must improve implementation)
                    player.setProjectileExists(false)
                    // Tar bort projektilen
                    this.removeCollidableObjectFromList(i)       
                    //Tar bort projektiler som inte syns på skärmen längre
                }
            }
        }
    }

    public draw(){
        for(let collidableObject of this.collidableObjectList){
            collidableObject.draw();
        }
    }

    public addCollidableObjectToList(collidableObject: CollidableObject){
        this.collidableObjectList.push(collidableObject);
    }

    public removeCollidableObjectFromList(index: number) {
        this.collidableObjectList.splice(index, 1)
    }

    public getCollidableObjectList(): Array<CollidableObject>{
        return this.collidableObjectList;
    }

    // remove later , test missiles.
    private addTestMissiles(){
        // let test1 = new PlayerProjectile(-5,-15,'yellow',windowWidth/2-50,windowHeight,40)
        // let test2 = new PlayerProjectile(-5,-15,'purple',windowWidth,windowHeight,40)
        // let test3 = new PlayerProjectile(5,-15,'blue',0,windowHeight,40)
        // let test4 = new PlayerProjectile(5,-15,'green',windowWidth/2+50,windowHeight,40)
        // let test5 = new PlayerProjectile(0,-25,'red',windowWidth/2,windowHeight - 100,40)
        // this.addCollidableObjectToList(test1)
        // this.addCollidableObjectToList(test2)
        // this.addCollidableObjectToList(test3)
        // this.addCollidableObjectToList(test4)
        // this.addCollidableObjectToList(test5)
    }
}