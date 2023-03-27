var coin, coinImage ;

var heart1, heart1Img ;
var heart2, heart2Img ;
var heart3 , heart3Img ;

var monster1 , monster1Img;
var monster2 , monster2Img;
var monster3 , monster3Img;
var monster4 , monster4Img;

var player;

var score = 0;

var wall1, wall2, wall3, wall4, wall5, wall6 , wall7,  wall8,  wall9,  wall10,
wall11,  wall12,  wall13,  wall14,  wall15,  wall16,  wall17,  wall18,  wall19,
wall20, wall21,  wall22,  wall23,  wall24 ;

var lives = 3;





function preload(){
 coinImage = loadImage("assets/coin.png");

 heart1Img = loadImage("assets/heart_1.png");
 heart2Img = loadImage("assets/heart_2.png");
 heart3Img = loadImage("assets/heart_3.png");

 monster1Img = loadImage("assets/Monster1.png");
 monster2Img = loadImage("assets/Monster2.png");
 monster3Img = loadImage("assets/Monster3.png");
 monster4Img = loadImage("assets/Monster4.png");



}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  background("black");

//creating player sprite
  player = createSprite(676,262,30,30);
  player.shapeColor = "white" ;

  
//creating coin sprite
  coin = createSprite(99,330,30,30);
  coin.scale = 0.2;
  coin.addImage(coinImage);


//creating monster sprite
  monster1 = createSprite(130,100,30,30);
  monster1.scale = 0.15;
  monster1.addImage(monster1Img);

  monster2 = createSprite(319,181,30,30);
  monster2.scale = 0.15;
  monster2.addImage(monster2Img);

  monster3 = createSprite(342,55,30,30);
  monster3.scale = 0.15;
  monster3.addImage(monster3Img);

  monster4 = createSprite(210,175,30,30);
  monster4.scale = 0.15;
  monster4.addImage(monster4Img);

  //creating maze sprite



wall1 = createSprite(10,70,100,20);
wall1.shapeColor= "darkgreen";

wall2 =createSprite(100,50,20,100);
wall2.shapeColor = "darkgreen";

wall3 =createSprite(80,130,100,20);
wall3.shapeColor = "darkgreen";

wall4 =createSprite(50,250,20,100);
wall4.shapeColor = "darkgreen";

wall5 = createSprite(130,210,100,20);
wall5.shapeColor = "darkgreen";

wall6 =createSprite(10,250,100,20);
wall6.shapeColor = "darkgreen";

wall7 = createSprite(160,120,20,100);
wall7.shapeColor = "darkgreen";

wall8 =createSprite(150,20,100,20);
wall8.shapeColor = "darkgreen";

wall9 = createSprite(220,200,20,100);
wall9.shapeColor = "darkgreen";

wall10 = createSprite(120,300,20,100);
wall10.shapeColor = "darkgreen";

wall11 = createSprite(30,350,20,100);
wall11.shapeColor = "darkgreen";

wall12 = createSprite(250,70,20,100);
wall12.shapeColor = "darkgreen";

wall13 = createSprite(360,120,20,100);
wall13.shapeColor = "darkgreen";

wall14 =createSprite(291,160,100,20);
wall14.shapeColor = "darkgreen";

wall15 =createSprite(330,40,100,20);
wall15.shapeColor = "darkgreen";

wall16 =createSprite(350,210,100,20);
wall16.shapeColor = "darkgreen";

wall17 = createSprite(350,400,20,100);
wall17.shapeColor = "darkgreen";

wall19 =createSprite(349,290,100,20);
wall19.shapeColor = "darkgreen";

wall20 = createSprite(290,290,20,100);
wall20.shapeColor = "darkgreen";

wall21 =createSprite(270,390,100,20);
wall21.shapeColor = "darkgreen";

wall22 = createSprite(170,390,20,100);
wall22.shapeColor = "darkgreen";

wall23=createSprite(190,330,100,20);
wall23.shapeColor = "darkgreen";

wall24 = createSprite(250,290,20,100);
wall24.shapeColor = "darkgreen";





}

function draw() {
  background(0); 

  text(mouseX+","+mouseY,mouseX,mouseY);
  text("score:"+ score,500,50);


  if(player.isTouching(coin)){
    score = score+10;
  }

  //movement of player

  if(keyDown("UP_ARROW")){
    player.y -= 10;
  }
 
  if(keyDown("DOWN_ARROW")){
    player.y += 10;
  }

  if(keyDown("RIGHT_ARROW")){
    player.x += 10;
  }

  if(keyDown("LEFT_ARROW")){
    player.x -= 10;
  }

  //Collision

  if(player.isTouching(monster1)){
    score = score-5;
  }

  if(player.isTouching(monster2)){
    player.y = player.y+25; 
  }



  //random powerups to avoid monsters

  //lives

if(player.isTouching(wall1||wall2||wall3||wall4||wall5||wall6||wall7||wall8||wall9||wall10||wall11||wall12||
  wall13||wall14||wall15||wall16||wall17||wall18||wall19||wall20||wall21||wall22||wall23||wall24))
  {
    lives = lives-1;
  
  }

  

drawSprites();

}
