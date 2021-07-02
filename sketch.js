var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //2 divison objects

  for (var k = 160; k <=160; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  // 3rd divison object

  for (var k = 240; k <=240; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  // 4th division object
  for (var k = 320; k <=320; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  // 5th divison object

  for (var k = 400; k <=400; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  // 6th divison object
  for (var k = 480; k <=480; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
    // 7th divison object
    for (var k = 560; k <=560; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }
      // 8th divison object
      for (var k = 640; k <=640; k = k + 80) {
        divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
      }
      
        // 9th divison object
        for (var k = 720; k <=720; k = k + 80) {
          divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
        }



  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 25; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }

  //create 4th row of plinko objects
  for (var j = 0; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }


  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 

}