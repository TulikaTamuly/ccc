var car, wall
var speed,weight,deformation,thickness

function setup() {
  createCanvas(1200,600);
  car = createSprite(50, 300, 50, 10);
  car.shapeColor = "white";
  car.debug = true;
  wall = createSprite(1150,300,60,thickness);
  wall.shapeColor = "white";
  wall.debug = true;
  speed=round(random(50,100))
  weight=round(random(250,400))
  thickness=random(22,83)
deformation=(weight*speed*speed)/(thickness*thickness*thickness)
car.velocityX=speed
}
function draw() {
  background(0,0,0);  
  

  if( isTouching(car,wall)){
    car.velocityX=0
    if(deformation>10){
      wall.shapeColor="red"
    }else if(deformation<10){
      wall.shapeColor="green"
    }
    
  } 

  
  drawSprites();
}


