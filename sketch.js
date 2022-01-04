var num
var cloud,cloud_image
var Edges;
var ground,ground_image;
var trex ,trex_running;
var invisibleground
var cactus1,cactus2,cactus3,cactus4,cactus5,cactus6;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png") 
  ground_image=loadImage("ground2.png")
  cloud_image=loadImage("cloud.png")
  cactus1=loadImage("obstacle1.png")
  cactus2=loadImage("obstacle2.png")
  cactus3=loadImage("obstacle3.png")
  cactus4=loadImage("obstacle4.png")
  cactus5=loadImage("obstacle5.png")
  cactus6=loadImage("obstacle6.png")
}

function setup(){
    createCanvas(600,200)
    Edges=createEdgeSprites();
    //create a trex sprite
  trex=createSprite(40,180,20,40)
  trex.addAnimation("running",trex_running)
  trex.scale=0.5

  ground=createSprite(200,185,400,10)
  ground.velocityX=-4
  ground.addImage(ground_image)
  ground.x=ground.width/2

  invisibleground=createSprite(200,195,400,10)
  invisibleground.visible=false
}

function draw(){
    background(255)
    if (keyDown("Space")&&trex.y>=100){
      trex.velocityY=-10
    }
    trex.velocityY = trex.velocityY+0.8
    if(ground.x<30){
      ground.x=ground.width/2
    }
    trex.collide(invisibleground);
    spawnClouds();
    spawnCacti();
  drawSprites();
}

function spawnClouds(){
  if(frameCount%60===0){
    cloud=createSprite(600,35,20,10)
    cloud.velocityX=-6
    cloud.addImage(cloud_image)
    cloud.scale=0.5
    cloud.y=Math.round(random(20,50))
    cloud.lifetime=100
  }

}

function spawnCacti(){
if(frameCount%60===0){
  cactus=createSprite(600,165,10,40)
  cactus.velocityX=-6
  var num=Math.round(random(1,6))
  switch(num){
    case 1:cactus.addImage(cactus1)
    break; 
    case 2:cactus.addImage(cactus2)
    break;
    case 3:cactus.addImage(cactus3)
    break;
    case 4:cactus.addImage(cactus4) 
    break;
    case 5:cactus.addImage(cactus5)
    break;
    case 6:cactus.addImage(cactus6)
    break;
    default:break
  }
  cactus.scale=0.5
  cactus.lifetime=100
}
}