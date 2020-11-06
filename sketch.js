var fixedRect, movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

rect1= createSprite(700,500,50,60);
rect1.shapeColor="White";
rect2=createSprite(500,300,40,30);
rect2.shapeColor="Red";

obj3=createSprite(400,200,50,100);
obj4 =createSprite(1000,200,50,100);

obj3.velocityX=5;
obj4.velocityX=-5;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  





  
  //write the actual values
  if(isTouching(movingRect,rect2))
  {

    movingRect.shapeColor = "purple";
      rect2.shapeColor = "orange";
  }
  else{
    movingRect.shapeColor = "green";
    rect2.shapeColor = "green";

  }
  
  if(isTouching(movingRect,rect1))
  {

    movingRect.shapeColor = "purple";
      rect1.shapeColor = "orange";
  }
  else{
    movingRect.shapeColor = "green";
    rect1.shapeColor = "green";

  }
  if(isTouching(movingRect,fixedRect))
  {

    movingRect.shapeColor = "purple";
      fixedRect.shapeColor = "orange";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    

  }
  
  BounceOff();
  drawSprites();
}

//write the substitute values
function isTouching(obj1,obj2)
{
    if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
        && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
        && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
        && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
      return true;
      
    }
    else {
      return false;
    }

}



