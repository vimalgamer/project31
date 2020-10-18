const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var divisionHeight = 300;

var plinkos = [];
var divisions = [];
var parcticles = [];

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,795,480,10);

  
}

function draw() {
  background(0);  

  Engine.update(engine);

  ground.display();

  //divisions
  for(var i =0; i <= width; i = i + 80){
    divisions.push(new Division(i, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  //plinkos
  for(var i =0; i <= width; i = i + 60){
    plinkos.push(new Plinko(i, 75, 10));
  }

  for(var i =0; i <= width; i = i + 60){
    plinkos.push(new Plinko(i, 175, 10));
  }

  for(var i =0; i <= width; i = i + 50){
    plinkos.push(new Plinko(i, 275, 10));
  }

  for(var i =0; i <= width; i = i + 60){
    plinkos.push(new Plinko(i, 375, 10));
  }

  for(var p = 0; p < plinkos.length; p++){
    plinkos[p].display();
  }
  
  //parcticles
  if(frameCount % 60 === 0){
      parcticles.push(new Parcticle(random(width/2 - 10, width/2 + 10), 10, 5));  
  }

  for(var p = 0; p < parcticles.length; p++){
    parcticles[p].display();
  }
  
}
