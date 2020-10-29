
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	g1 = new Rectangle1(750,680,1500,20)

	r1 = new Rectangle1(900,550,20,200);
	r2 = new Rectangle1(1100,550,20,200);
	r3 = new Rectangle1(1000,640,200,20);

	c1 = new Circle(200,500,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("white");
  r3.display();
  r1.display();
  r2.display();
  fill("orange");
  c1.display();
  fill("green");
  g1.display();	
  drawSprites();
 
}


function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		console.log("up arrow")
		Matter.Body.applyForce(c1.body,c1.body.position,{x:0.45,y:-0.45});
	}
}
