const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle

var count = 0;

var divisionHeight = 300;
var score = 0;

var play 
var end
var gameState = play

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,800,800,10);

  particle = new Particle(200,10,10)

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

  for (var j = 75; j <=width; j=j+50) 
    {
    plinkos.push(new Plinko(j,75));
    }

  for (var j = 50; j <=width-10; j=j+50) 
    {  
    plinkos.push(new Plinko(j,175));
    }

  for (var j = 75; j <=width; j=j+50) 
    {   
    plinkos.push(new Plinko(j,275));
    }

  for (var j = 50; j <=width-10; j=j+50) 
    { 
    plinkos.push(new Plinko(j,375));
    }
}
 
function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);

  textSize(30)
  fill("white")
  text("500",15,700)
  text("400",95,700)
  text("300",175,700)
  text("200",255,700)
  text("100",335,700)
  text("100",415,700)
  text("200",495,700)
  text("300",575,700)
  text("400",655,700)
  text("500",735,700)

  Engine.update(engine);
 
  if(particles!=null){
    particle.display()
  }
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
   }
 
  //for (var j = 0; j < particles.length; j++) {
   // particle.display();
  // }
  
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
   }

  ground.display()

  drawSprites()
}

function mousePressed(){
  particle = new Particle(mouseX,10,10)
}