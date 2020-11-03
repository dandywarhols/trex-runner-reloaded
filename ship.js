var ship = createSprite(50,50,5,5);
ship.rotation = 360;

var torpedo =createSprite(ship.x,ship.y,5,2);
var mark = createSprite(ship.x,ship.y,1,1);

var gameState = "play";

var rightBar = createSprite(400,200,2,400);

/*var ship1 = createSprite(350,350,5,5);
ship1.rotation = 180;
var turn = 0;
var torpedo = createSprite(ship.x,ship.y,5,1);
var torpedo1 = createSprite(ship1.x,ship1.y,5,1);
var turn1 = 0;
var r = randomNumber(1,3);
var shot = createSprite(ship.x,ship.y,2,2);
var sea = createSprite(200,210,10,10);
sea.setAnimation("sea1");
sea.scale = 4;
var mortar = createSprite(380,380,20,5);
mortar.setAnimation("1");
mortar.rotation = 270;*/

function draw()
{
  background("white");
  
  mark.x=ship.x;
  mark.y = ship.y;
  ship.setCollider("rectangle",0,0,55,10);
  
  /*torpedo.x = mark.x;
  torpedo.y = mark.y;
  torpedo.rotationn = ship.rotation;
  torpedo1.rotation = ship1.rotation;
  torpedo1.x = ship1.x;
  //torpedo1.collide(point1);
  //torpedo1.y = ship1.y;
  //var dist = mortar.y-ship.x;
  //ship1.setCollider("rectangle",0,0,55,10);
  if(keyDown("space"))
  {
    gameState === "play";
  }*/
    
  if(gameState === "play")
  {
     
    ship.setSpeedAndDirection(0.5, ship.rotation);
    ship.setAnimation("2");
    
    
    if(keyDown("p"))
    {
      ship.setSpeedAndDirection(0, ship.rotation);
      //ship1.setSpeedAndDirection(0,ship1.rotation);
    }
    
    if(keyDown("UP_ARROW"))
    { 
      ship.setSpeedAndDirection(1, ship.rotation);
    }
    
    if(keyDown("DOWN_ARROW"))
    { 
      ship.setSpeedAndDirection(-0.5, ship.rotation);
    }
    
    if(keyDown("LEFT_ARROW"))
    {
      ship.rotation = ship.rotation-1;
    }
    
    if(keyDown("RIGHT_ARROW"))
    {
      ship.rotation = ship.rotation+1;
    }
    
    /*if(keyDown("w"))
    { 
      ship1.setSpeedAndDirection(1, ship1.rotation);
    }
    
    if(keyDown("s"))
    { 
      ship1.setSpeedAndDirection(-0.5, ship1.rotation);
    }
    
    if(keyDown("a"))
    {
      ship1.rotation = ship1.rotation-1;
    }
    
    if(keyDown("d"))
    {
      ship1.rotation = ship1.rotation+1;
    }*/
    /* if(keyDown("d")&& mortar.rotation < 285)
    {
      mortar.rotation = mortar.rotation +1;
    }
    
    if(keyDown("a") && mortar.rotation>165)
    {
      mortar.rotation = mortar.rotation -1;
    }
    
    if(keyDown("s")&& shot.y >379)
    {
      shot.rotation = mortar.rotation;
      shot.setSpeedAndDirection(5, mortar.rotation);  
    }
    
    //ship1.setSpeedAndDirection(0.5,ship1.rotation);
    //ship1.setAnimation("2");*/
   
}
/* text("Hits:"+turn,150,10);
text(  World.seconds+" / 120 : Time Taken",200,10);
text("Distance:" +dist ,330,10);
if(shot.isTouching(ship))
{
  shot.x = mortar.x;
  shot.y = mortar.y;
  turn = turn +1;
  shot.velocityX = 0;
  shot.velocityY = 0;
}
//console.log(ship.velocity);
if(World.seconds>120)
{
  gameState ="over";
}
console.log(World.frameCount);

if(gameState === "over")
{
  var win = createSprite(200,200,1,1);
  win.setAnimation("gameOver");
}
 
  if(turn >3)
  {
    gameState = "sunk";
  }
  
  if(gameState === "sunk")
  {
    ship.setAnimation("gameOver");
    ship.x = 200;
    ship.y =200;
    ship.rotation = 360;
  }
  ship1.bounceOff(edges);
  if(torpedo.isTouching(edges))
  {
    torpedo.x =ship.x;
    torpedo.setSpeedAndDirection(ship.velocity,ship.rotation);
    torpedo1.y = point1.y;
  }
  
  torpedo1.x = point1.x;
  torpedo1.y = point1.y;*/
  
  createEdgeSprites();
  ship.bounceOff(edges);

  if(torpedo.isTouching(rightBar))
  {
    restore();
  }
  
  if(torpedo.isTouching(ship))
  {
    torpedo.velocityX = ship.velocityX;
    torpedo.velocityY = ship.velocityY;
  }
  
  torpedo.rotation = ship.roatation;
  torpedo.setAnimation("3");
    
  fire();
  drawSprites();
}

function fire()
{
  
  if(keyDown("space"))
  { 
    torpedo.setSpeedAndDirection(2,ship.rotation);
  }
}
function restore()
{
  torpedo.x = ship.x;
  torpedo.y = ship.y;
}