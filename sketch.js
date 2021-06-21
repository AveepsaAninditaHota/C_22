var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy,fairyImg;
var fairyImage1;
var fairyImage2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fairyImg= loadAnimation("fairy.png");
    fairyImage1=loadAnimation("fairyImage1.png");
	fairyImage2=loadAnimation("fairyImage2.png");

}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
	fairy=createSprite(100,600)
	fairy.addAnimation("fairy",fairyImg);
	fairy.scale=0.2


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);


	if(star.isTouching(fairy)){
		fairy.changeAnimation("fairy",fairyImage1);
	}

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y > 470 && starBody.position.y > 470 ){
	  Matter.Body.setStatic(starBody,true)

  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
	if (keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x + 20;
	}
	if (keyCode === LEFT_ARROW) {
		fairy.x = fairy.x-20;
	}
}
