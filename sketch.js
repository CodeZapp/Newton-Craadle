
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roofObject = new roof(width / 2, height / 4, 500, 20);
	bob3 = new bob(width / 2, 450, 40);
	rope3 = new rope(bob3.body, roofObject.body, 0, 0);
	bob4 = new bob(width / 2 - 80, 450, 40);
	rope4 = new rope(bob4.body, roofObject.body, -80, 0);
    bob2 = new bob(width / 2 + 80, 450, 40);
	rope2 = new rope(bob2.body, roofObject.body, 80, 0);
    bob5 = new bob(width / 2 - 160, 450, 40);
	rope5 = new rope(bob5.body, roofObject.body, -160, 0);
    bob1 = new bob(width / 2 + 160, 450, 40);
	rope1 = new rope(bob1.body, roofObject.body, 160, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  roofObject.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob2.display();
  rope2.display();
  bob5.display();
  rope5.display();
  bob1.display();
  rope1.display();

  drawSprites();
}

function keyPressed() { if (keyCode === UP_ARROW) { 
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-50,y:-45}); 
} }

