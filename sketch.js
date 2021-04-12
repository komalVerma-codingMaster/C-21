/*

*************************     Sound Effects is not added because It is not given     *************************

*/




var redBar;
var blueBar;
var greenBar;
var yellowBar;

var player;
var playerX=957.5;
var playerY=450;

function setup() {

  createCanvas(1920, 935);

  redBar=createSprite(235, 900, 450, 50);
  redBar.shapeColor="red";

  blueBar=createSprite(715, 900, 450, 50);
  blueBar.shapeColor="blue";

  greenBar=createSprite(1200, 900, 450, 50);
  greenBar.shapeColor="green";

  yellowBar=createSprite(1685, 900, 450, 50);
  yellowBar.shapeColor="yellow";

  player=createSprite(playerX, playerY, 40, 40)
  player.shapeColor="black";

}





function draw() {

  background("white")

  redTouch(player, redBar);
  blueTouch(player, blueBar);
  greenTouch(player, greenBar);
  yellowTouch(player, yellowBar);

  if((player.x<0)||(player.x>1920)||(player.y<0)||(player.y>935)){

    player.x=playerX;
    player.y=playerY;

    player.shapeColor="black";

  }

  if(keyWentDown("w")){

    player.velocityY=-15;

  }

  if(keyWentDown("a")){

    player.velocityX=-15;

  }

  if(keyWentDown("s")){

    player.velocityY=15;

  }

  if(keyWentDown("d")){

    player.velocityX=15;

  }



  if(keyWentUp("w")){

    player.velocityX=0;
    player.velocityY=0;

  }

  if(keyWentUp("a")){

    player.velocityX=0;
    player.velocityY=0;

  }

  if(keyWentUp("s")){

    player.velocityX=0;
    player.velocityY=0;

  }

  if(keyWentUp("d")){

    player.velocityX=0;
    player.velocityY=0;

  }

  drawSprites();

}

//  *************************     END     *************************