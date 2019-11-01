class Board {
    constructor() {
      this.x = 0
      this.y = 0
      this.width = canvas.width
      this.height = canvas.height
      this.img = new Image()
      ctx.fillStyle = 'green';
      ctx.fillRect(30, 0, 30, 550);
      ctx.fillRect(530, 0, 30, 550);
      ctx.fillStyle = 'grey';
      ctx.fillRect(60, 0, 5, 550);
      ctx.fillRect(525, 0, 5, 550);
      ctx.fillRect(75, 0, 440, 550);
      ctx.fillStyle = 'white';
        for(let i = 0; i<=550; i +=80){
        ctx.fillRect(290, i, 10, 30);
        this.img.onload = () => {
        this.draw()
            }
        }
    }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.fillStyle = 'green';
    ctx.fillRect(30, 0, 30, 550);
    ctx.fillRect(530, 0, 30, 550);
    ctx.fillStyle = 'grey';
    ctx.fillRect(60, 0, 5, 550);
    ctx.fillRect(525, 0, 5, 550);
    ctx.fillRect(75, 0, 440, 550);
    ctx.fillStyle = 'white';
    //for(let i = 0; i<=550; i +=80){  //este for rompe el canvas
    //   ctx.fillRect(290, i, 10, 30);
  }

}


  class Flash {
    constructor() {
      this.width = 50
      this.height = 50
      this.y = 10 // canvas.height - this.height
      this.x = 10
      this.vx = 0
      this.vy = 0
    //  this.animate = 0
    //  this.position = 0
    //  this.jumpStrenght = 18
      this.hp = 3
      this.img = new Image()
      this.img.src = 'images/car.png'
      
      this.img.onload = () => {
        this.draw()
      }
    }

   draw() {
      if (this.y > canvas.height - this.height) {
        this.y = canvas.height - this.height
        } else {
        this.vy++
        }
    
    
    
    
        ctx.drawImage(this.img,this.x,this.y,25,50);}
   


    isTouching(obstacle) {
      // algo está tratando de ocupar el mismo espacio en canvas que flash
      return (
        this.x < obstacle.x + obstacle.width &&
        this.x + this.width > obstacle.x &&
        this.y < obstacle.y + obstacle.height &&
        this.y + this.height > obstacle.y
      )
    }
    moveLeft() {
      this.vx -= 3

    }
    moveRight() {
      this.vx += 3

    }

  }
  
//  class Ice {
//    constructor(y) {
//      this.x = canvas.width
//      this.y = y
//      this.width = 50
//      this.height = 50
//      this.img = new Image()
//      this.img.src = 'http://pixelartmaker.com/art/d6e55b4f17d7d6a.png'
//    }

    class Ice {
      constructor(x) {
        this.y = 0;
        this.x = x;
      //  this.vy = ;
        this.width = 50
        this.height = 50
        this.img = new Image()
        this.img.src = 'http://pixelartmaker.com/art/d6e55b4f17d7d6a.png'
      }





    draw() {
      this.x--
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
  }