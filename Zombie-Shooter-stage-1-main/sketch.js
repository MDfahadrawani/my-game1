var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")
  bloodImg = loadImage("assets/blood-splatter-png-44476.png")
  zombieImg = loadImage("assets/zombie-48812.png")
  zombie2Img = loadImage("assets/zombie.png")
  zombie3Img = loadImage("assets/zombie-48831.png")


  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   

   heart1 = createSprite(displayWidth - 250,40,20,20)
   //heart1.visible = false
   heart1.addImage("heart1",heart1Img)
   heart1.scale = 0.4

   heart2 = createSprite(displayWidth - 200,40,20,20)
   //heart2.visible = false
   heart2.addImage("heart2",heart2Img)
   heart2.scale = 0.4

   heart3 = createSprite(displayWidth - 150,40,20,20)
   //heart3.visible = false
   heart3.addImage("heart3",heart3Img)
   heart3.scale = 0.4


   zombieGroup = new Group();





}

function draw() {
  background(0); 


enemy();

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}

function enemy(){
   if(frameCount%50===0){ //giving random x and y positions for zombie to appear 
    zombie = createSprite(random(500,1100),random(100,500),40,40) 
    zImage = Math.round(random(1,3))
    if (zImage === 1) {
      zombie.addImage(zombieImg)
      zombie.scale = 0.1
    }
    
    else if (zImage === 2) {
      zombie.addImage(zombie2Img)
      zombie.scale = 0.20
    }

    else if (zImage === 3) {
      zombie.addImage(zombie3Img)
      zombie.scale = 0.20 
    }
     
    
    zombie.velocityX = -3 
    zombie.debug= true 
    zombie.setCollider("rectangle",0,0,400,400) 
    zombie.lifetime = 400 
    zombieGroup.add(zombie) } }


