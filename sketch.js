var canvas;
var music;
var box;
var boundry1;
var boundry2;
var boundry3;
var boundry4;
var green;
var red;
var yellow;
var blue;

function preload(){
    music = loadSound("music.mp3");
    banner = loadImage("Banner.png");
    }

function setup(){
    canvas = createCanvas(1535,750);

    design=createSprite(650,500,20,20);
    design.addImage("banner",banner);
    design.scale=2.50;

  //creating box sprite and give velocity + colour
    
    
    surface1=createSprite(250, 500, 350, 30);
    surface1.shapeColor="blue";
    surface2=createSprite(620, 500, 350, 30);
    surface2.shapeColor="orange";
    surface3=createSprite(990, 500,350, 30);
    surface3.shapeColor="red";
    surface4=createSprite(1340, 500, 300, 30);
    surface4.shapeColor="green";

  //create 4 different surfaces
    boundry1=createSprite(15, 767.5, 30, 3070);
       boundry1.shapeColor=color(253,0,177);
    boundry2=createSprite(1520, 600, 30, 3070);
       boundry2.shapeColor=color(253,0,177);
    boundry3=createSprite(1535, 15, 3070, 30);
       boundry3.shapeColor=color(253,0,177);
    boundry4=createSprite(1535, 735, 3070, 30);
       boundry4.shapeColor=color(253,0,177);
     
    box=createSprite(50, 105, 90, 90);
    box.shapeColor=color(255,255,255);
   
    box.y=Math.round(random(15,330));
    box.x=Math.round(random(130,1200));
    box.velocityX=7;
    box.velocityY=-7;
    box.scale=0.40;

    
}

function draw() {
    background("pink");

    music.play();

    //giving bounceOff condition
    box.bounceOff(boundry1);
    box.bounceOff(boundry2);
    box.bounceOff(boundry3);
    box.bounceOff(boundry4);

if (surface1.isTouching(box)){
  box.shapeColor=color(57,0,245);
  box.velocityX=0;
  box.velocityY=0;
  music.stop();
}
if (surface2.isTouching(box)){
  box.shapeColor=color(245,139,0);
  box.velocityX=0;
  box.velocityY=0;
  music.stop();
}
if (surface3.isTouching(box)){
  box.shapeColor=color(245,0,0);
  box.velocityX=0;
  box.velocityY=0;
  music.stop();
}
if (surface4.isTouching(box)){
  box.shapeColor=color(21,141,41);
  box.velocityX=0;
  box.velocityY=0;
  music.stop();
}
    //creating edge Sprite
    createEdgeSprites();
   
    drawSprites();
   
}

