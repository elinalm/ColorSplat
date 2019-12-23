class CollidableObjectManager {
    private collidableObjectList: Array<CollidableObject> = [];
    private target: TargetGameCanvas

    constructor(target: TargetGameCanvas){
        this.addTestMissiles(); //remove later, just for test
        this.target = target;   //import target to draw splash on canvas
    }

    public updatePos(){
        
        for(let collidableObject of this.collidableObjectList){
            collidableObject.updatePos();
            collidableObject.checkCollision(this.collidableObjectList)
        }
        this.removeCollidedObjects(); //remove missiles and draw splash
    }

    private removeCollidedObjects(){
        for(let i = 0; i < this.collidableObjectList.length; i++){
            if(this.collidableObjectList[i].hasCollided === true){
                this.target.addSplashToTargetCanvas(
                    this.collidableObjectList[i].x,
                    this.collidableObjectList[i].y,
                    this.collidableObjectList[i].color,
                    this.collidableObjectList[i].radius*2
                )
                this.collidableObjectList.splice(i,1)
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

    public get getCollidableObjectList(): Array<CollidableObject>{
        return this.collidableObjectList;
    }

    // remove later , test missiles.
    private addTestMissiles(){
        let test1 = new PlayerProjectile(-5,-15,'yellow',windowWidth/2-50,windowHeight,40)
        let test2 = new PlayerProjectile(-5,-15,'purple',windowWidth,windowHeight,40)
        let test3 = new PlayerProjectile(5,-15,'blue',0,windowHeight,40)
        let test4 = new PlayerProjectile(5,-15,'green',windowWidth/2+50,windowHeight,40)
        let test5 = new PlayerProjectile(0,-25,'red',windowWidth/2,windowHeight - 100,40)
        this.addCollidableObjectToList(test1)
        this.addCollidableObjectToList(test2)
        this.addCollidableObjectToList(test3)
        this.addCollidableObjectToList(test4)
        this.addCollidableObjectToList(test5)
    }
}