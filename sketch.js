var canvas,harry,voldemort,bush1,bush2,bush3,bush4,fire1,fire2,ghost,ghost2,wall1,wall2,wall3,wall4,wall5,wall6;
var bg0,bg1,bg2,bg1img,bg2img,bg0img;
var harryimage,voldemortimage,bush1img,bush2img,bush3img,bush4img,fire1img,fire2img,ghostimg,ghost2img;
var wall1img,wall2img,wall3img,wall4img,wall5img,wall6img,backgroundimg;
var start,startimg;
var mazebackground,mazebgimg;
var gameState =0;


function preload(){
      bg0img=loadImage("../images/bg0.png");
      bg1img=loadImage("../images/bg1.jpg");
      bg2img=loadImage("../images/bg2.jpg");
      harryimage=loadImage("../images/harrypottergame.png");
      voldemortimage=loadImage("../images/voldemort.png");
      bush1image=loadImage("../images/bush1.jpg");
      bush2image=loadImage("../images/bush2.jpg");
      bush3image=loadImage("../images/bush3.jpg");
      bush4image=loadImage("../images/bush4.jpg");
      fire1img=loadImage("../images/fire1.png");
      fire2img=loadImage("../images/fire2.jpg");
      ghostimg=loadImage("../images/ghost.jpg");
      ghost2img=loadImage("../images/ghosts.jpg");
      wall1img=loadImage("../images/wall1.jpg");
      wall2img=loadImage("../images/wall2.jpg");
      wall3img=loadImage("../images/wall3.jpg");
      wall4img=loadImage("../images/wall4.jpg");
      wall5img=loadImage("../images/wall5.jpg");
      wall6img=loadImage("../images/wall6.jpg");
      startimg=loadImage("../images/start.png");
      mazebgimg=loadImage("../images/mazebg.jpg");
}

function setup(){
      createCanvas(windowWidth,windowHeight);

       //gamestate0
       startState();

       //gamestate1
     setMaze(); 
}

function draw(){
      background(0);
      
      if(gameState===0){
        bg0.visible = true;
        start.visible = true;
        startLevel();
      }

      if(gameState===1){
          bg1.visible=true;
      }
      drawSprites();
}

function startState(){

      bg0=createSprite(width/2,height/2-150,width,height);
      bg0.addImage(bg0img);
      bg0.scale=2;
      bg0.visible = false;

      start=createSprite(width/2,height/2+150,50,30);
      start.addImage(startimg);
      start.scale=0.5;
      start.visible = false;

}

function startLevel(){
    stroke("silver");
      strokeWeight(5);
      textSize(20);
      fill(255);
      text("Welcome to the Hogwarts World!\n Level 1: \n Use arrow keys to reach the final door..",width/2-150,height/2); 


      if(mousePressedOver(start)){
        clear();
        //game state changes to 1
        gameState=1;

      }
}

function setMaze(){
    bg1=createSprite(width/2,height/2,width,height);
    bg1.addImage(mazebgimg);
    bg1.scale=3;
    bg1.visible=false;
}


  