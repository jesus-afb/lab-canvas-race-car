const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let interval
let frames = 0
let gravity = 8.9
const obstacles = []


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  
  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
  
  function flashAnimation() {
    if (frames % 5 === 0) {
      if (flash.animate === 3) {
        flash.animate = 0
      } else {
        flash.animate++
      }
    }
  }
  
  function checkColitions() {
    if (flash.x <= 0) {
      flash.x = canvas.width - flash.width
    } else if (flash.x > canvas.width) {
      flash.x = 0
    }
    obstacles.forEach((ice, i) => {
      if (flash.isTouching(ice)) {
        obstacles.splice(i, 1)
        flash.hp--
      }
    })
  }
  
  function gameOver() {
    if (flash.hp === 0) {
      clearInterval(interval)
      ctx.font = '30px Arial'
      ctx.fillStyle = 'white'
      ctx.fillText('Game Over', canvas.width / 2 - 30, canvas.height / 2 - 10)
    }
  }
  
  function generateIce() {
    if (frames % 200 === 0) {
      const randomPosition = Math.floor(Math.random() * canvas.width) + 50
      const ice = new Ice(randomPosition)
      obstacles.push(ice)
    }
  }
  
  function update() {
    frames++
    clearCanvas()
    board.draw()
    flashAnimation()
    flash.draw()
    flash.x += flash.vx
    flash.y += flash.vy
    Ice.y += gravity
    checkColitions()
    generateIce()
    drawObstacles()
    gameOver()
  }

  function drawObstacles() {
    obstacles.forEach(ice => ice.draw())
  }
  
  function startGame() {
    flash.x = canvas.width/2 - flash.width + 15;
    flash.y =  -flash.height/2;
   }

   interval = setInterval(update, 1000 / 60)

};
