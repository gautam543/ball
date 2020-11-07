var ball
var box1,box2

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	ball.createsprite(50,50,20,20);
}

function ball(){


}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball();
  box1();
  box2();
  
  drawSprites();
 
}



