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
  drawSprites();
}

