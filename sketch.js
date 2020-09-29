function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 100, 50, 50);
  rect2 = createSprite(400, 300, 50, 50);

  movingRect = createSprite(200, 100, 50, 50);
  fixedRect = createSprite(600, 300, 50, 50);

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  rect1.velocityY = 2;
  rect2.velocityY = -2;

}

function draw() {
  background(0);  
  movingRect.x = mouseX
  movingRect.y = mouseY
  rect1.debug = "true";
  rect2.debug = "true";

  if(rect1.x-rect2.x < rect1.width/2 + rect2.width/2 &&
    rect2.x-rect1.x < rect1.width/2 + rect2.width/2) {
     rect1.velocityX = rect1.velocityX*-1
     rect2.velocityX = rect2.velocityX*-1;
  }
  if(rect1.y-rect2.y < rect1.height/2 + rect2.height/2 &&
    rect2.y-rect1.y < rect1.height/2 + rect2.height/2) {
     rect1.velocityY = rect1.velocityY*-1
     rect2.velocityY = rect2.velocityY*-1;
  }
  if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2){
    
     movingRect.shapeColor = "red";
     fixedRect.shapeColor = "red";
  } 
  else{movingRect.shapeColor = "green"
  fixedRect.shapeColor = "green"}
  drawSprites();
}