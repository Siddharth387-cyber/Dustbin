
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,crumpledPaper,bin,ground,paperimg,dustbinimg;

function preload()
{
	paperimg=loadImage("paper.png");
	dustbin=loadImage("dustbingreen.png")
}

function setup() {
	 var canvas=createCanvas(1200,600);

	engine = Engine.create();
	world = engine.world;
	ground=new Ground();
	crumpledPaper=new Paper();

	bin=createSprite(964,520,20,20);
	bin=addImage=(dustbinimg);
	bin.scale=0.45;

	binPart1=new Dustbin(902,505,10,120);
	binPart2=new Dustbin(962,565,130,10);
	binPart3=new Dustbin(1024,505,10,120);

  
}


function draw() {
	background(0);
	Engine.update(engine);
	
	
	crumpledPaper.display();
	binPart1.display();
	binPart2.display();
	binPart3.display();
	ground.display();
	  
	drawSprites();
 
}
function keypressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{
			x:12,
			y:-13
		});
	}
}



