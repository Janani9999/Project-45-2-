var bg,bgImg
var spaceship,spaceshipImg
var obstacleImg
var gemstoneImg
var gamestate="play"


function preload(){
  bgImg=loadImage("space.png")
  spaceshipImg=loadImage("spaceship.png")
  obstacleImg=loadImage("asteroid.png")
  gemstoneImg=loadImage("gemstone.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  

  bg=createSprite(width/2, height/2, width, height);
  bg.addImage(bgImg)
  bg.scale=1.5

  spaceship=createSprite(400,400,30,50);
  spaceship.addImage(spaceshipImg)
  spaceship.scale=0.3

  obstaclesGroup=createGroup()
  gemstonesGroup=createGroup()
}

function draw() {
  bg.velocityX = -2
  if (bg.x < 0) {
    bg.x = width/2
  }  

  if(keyDown(RIGHT_ARROW)){
    spaceship.x=spaceship.x+2
  }

  if(keyDown(UP_ARROW)){
    spaceship.y=spaceship.y-2
  }

  if(keyDown(DOWN_ARROW)){
    spaceship.y=spaceship.y+2
  }

  if (spaceship.isTouching(obstaclesGroup)) {
    gamestate = "end"
if(gameState=="play"){
  spawnObstacles()
  spawnGemstones()
}
console.log("working")
  drawSprites();
}

function spawnObstacles() {
  if (frameCount % 100 == 0) {
    var obstacle = createSprite(850,random(height/2-50,height/2+80),20,50)
    obstacle.velocityX=-2
    obstacle.addImage(obstacleImg)
    obstacle.scale=0.2
    obstaclesGroup.add(obstacle)
    
    
  }
}
}

function spawnGemstones() {
  if (frameCount % 100 == 0) {
    var gemstone = createSprite(850,random(height/2-50,height/2+80),20,50)
    gemstone.velocityX=-2
    gemstone.addImage(gemstoneImg)
   gemstone.scale=0.2
   console.log(gemstone.velocityX)
    gemstonesGroup.add(gemstone)
  }
}


