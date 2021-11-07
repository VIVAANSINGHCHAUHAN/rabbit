var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg;
var orangeleafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeleafImg = loadImage("orangeleaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createapples(){
  if(frameCount % 80 === 0){
  var apple;
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.05;
  apple.velocityY = 2;
  apple.lifetime = 200;
}
}

function createleaves(){
  if(frameCount % 80 === 0){
  var orangeleaf = createSprite(random(20,150),40,10,10);
  orangeleaf.addImage(orangeleafImg);
  orangeleaf.scale = 0.05;
  orangeleaf.velocityY = 2;
  orangeleaf.lifetime = 200;
}
}

  



function draw() {
  background(0);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
   
  createapples();
  createleaves();
  drawSprites();
}