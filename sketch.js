//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  //Create a physics engine object and store it in myEngine
  myEngine = Engine.create();  //myEngine.world

  //Create our game world
  myWorld = myEngine.world;

  //Create a rectangular physics engine body
  var ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,400,20, ground_options);
  World.add(myWorld, ground);

  var ball_options = {
    restitution : 1.0
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(myWorld,ball);
}

function draw() {
  background("black");

  
  //UPdate physics engine
  Engine.update(myEngine);
  
  //Display the ground body using rect command
  fill("brown");
  rectMode(CENTER);  //the rectangle's x and y position will be its center and not top left corner
  rect(ground.position.x,ground.position.y,400,20);

  //Display the ball circular body using ellipse command
  fill("blue");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);


 }
