class Timer implements DrawableObject {
    //Class attributes
    private timer: number;
    private min: number = 0;

    private downloadTimer = setInterval(()=> {
      this.timer--
      
      if (this.timer === 0) {        
        clearInterval(this.downloadTimer);
      }
    },1000);

    private posX: number;
    private posY: number;
    //Class constructor
    constructor (timer: number, posX: number, posY: number) {
        this.timer = timer
        this.posX = posX
        this.posY = posY
        
    }
    
    //Class functions
    public draw(): void {
      this.min = floor(this.timer / 60)
        fill(255, 255, 255, 0)
        fill('white')
        textSize(100)
        
        if (this.timer != 0 && this.timer < 10) {
          text(this.timer, this.posX, this.posY+18)

        }
        else if (this.timer != 0 && this.timer < 60){
          push()
          textAlign(CENTER)
          text(this.timer, this.posX, this.posY+18)
          pop()

        } else if (this.timer != 0 && this.timer >= 60) {
          push()
          textAlign(CENTER)
          
          
            if (this.timer - 60*this.min != 0 && this.timer - 60*this.min >= 10) {
              text(this.min + " : " + (this.timer - (60*this.min)), this.posX, this.posY+18)
            } else if (this.timer - 60*this.min != 0 && this.timer - 60*this.min < 10) {
              text(this.min + " : " + "0" + (this.timer - (60*this.min)), this.posX, this.posY+18)

            }else {
              text(this.min + " : "+"00", this.posX, this.posY+18)
            }
          pop()
        }
        else {
          textAlign(CENTER)
          text('Game over', this.posX, this.posY+18)
          //setTimeout(GameController, 3000);
        }


        // let downloadTimer = setInterval(function(){
        // timeleft--;
        // if(timeleft <= 0)
        //     clearInterval(downloadTimer);
        // },1000);
        }

    }