timer = 35
bowX = 0

var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  yellow_balloonImage = loadImage("yellow_balloon0.png");
  orange_balloonImage = loadImage("orange_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  arrow1 = createSprite(bow.x, mouseY, 60,10)
  arrow1.addImage(arrowImage)
  arrow1.scale = 0.3

  arrow_group = new Group();
  redGroup = new Group();
  blueGroup = new Group();
  greenGroup = new Group();
  yellowGroup = new Group();
  orangeGroup = new Group();
}

function draw() {
 background(0);
 arrow1.x = bow.x 
 arrow1.y = mouseY
  // moving ground
    scene.velocityX = -3 
    timer -= 1

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  bowX = bow.x
  
   // release arrow when space key is pressed
  if (keyDown("space") && timer <= 0) {
    createArrow();
    timer = 35
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,5));
  if (World.frameCount % 70 == 0) {
    if(select_balloon == 1){
      redBalloon();
    }
    if(select_balloon == 2){
      blueBalloon();
    }
    if(select_balloon == 3){
      greenBalloon();
    }
    if(select_balloon == 4){
      yellowBalloon();
    }
    if(select_balloon == 5){
      orangeBalloon();
    }
    }

  if(arrow_group.isTouching(redGroup)){
    redGroup.destroyEach()
    }
  if(arrow_group.isTouching(blueGroup)){
    blueGroup.destroyEach()
    }
  if(arrow_group.isTouching(greenGroup)){
    greenGroup.destroyEach()
    }
  if(arrow_group.isTouching(yellowGroup)){
    yellowGroup.destroyEach()
    }
    if(arrow_group.isTouching(orangeGroup)){
      orangeGroup.destroyEach()
      }
  drawSprites();
  }


// Creating  arrows for bow
 function createArrow() {
    var arrow = createSprite(bowX, mouseY, 60, 10);
    arrow.addImage(arrowImage);
    arrow.lifetime = 100;
    arrow.scale = 0.3;
    arrow.velocityX = -5
    arrow.depth = bow.depth
    arrow_group.add(arrow)
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redGroup.add(red)
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueGroup.add(blue)
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenGroup.add(green)
}

function yellowBalloon() {
  var yellow = createSprite(0,Math.round(random(20, 370)), 10, 10);
  yellow.addImage(yellow_balloonImage);
  yellow.velocityX = 3;
  yellow.lifetime = 150;
  yellow.scale = 1.35;
  yellowGroup.add(yellow)
}

function orangeBalloon() {
  var orange = createSprite(0,Math.round(random(20, 370)), 10, 10);
  orange.addImage(orange_balloonImage);
  orange.velocityX = 3;
  orange.lifetime = 150;
  orange.scale = 0.1;
  orangeGroup.add(orange)
}
