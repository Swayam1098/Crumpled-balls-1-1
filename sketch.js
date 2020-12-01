var box1, box2, box3
var ground;
var paper
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}


function setup() {
	createCanvas(1500, 700);

	box1 = createSprite(1200,655,200,15);
	box1.shapeColor = ("red");
	box2 = createSprite(1090,607,20,110);
	box2.shapeColor = ("red");
	box3 = createSprite(1300,607,20,110);
	box3.shapeColor = ("red");
	
	paper= createSprite(100,640,50,50)
	
	ground = createSprite(740,667,1520,10)
    ground.shapeColor = ("yellow")

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  




  drawSprites();
 
}



