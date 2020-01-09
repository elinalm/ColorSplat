class CollidableObjectManager {
    private collidableObjectList: Array<CollidableObject> = [];
    public target: DrawExplosions

    constructor(target: DrawExplosions){
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

            const object = this.collidableObjectList[i]
            // If Projectile has collided with PowerUp
            if(object.shouldBeRemoved){
                this.removeCollidableObjectFromList(i)
                
            }
            // If projectile or object moves out of window view
            if(object.x > windowWidth || object.x < 0 || object.y > windowHeight) {
                
                if (object instanceof PlayerProjectile) {
                    const player = object.getOwnerPlayer();
                    
                    //Säger till spelaren att projektilen inte längre existerar, så att spelaren kan skjuta ett nytt skott (must improve implementation)
                    player.setProjectileExists(false)   
                }

                object.shouldBeRemoved = true
                
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
}