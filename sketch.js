
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight = 300;
var point;
var score = 0;
var particles;
var count = 0;
GameState = "play";
GameState = "end";

function setup() {

    createCanvas(700, 600);

    engine = Engine.create();
    world = engine.world;


    border1 = new Ground(240, 600, 920, 10);
    border2 = new Ground(2, 375, 15, 750);
    border3 = new Ground(700, 375, 15, 750);
    point = new Plinko(10,10,10)


    for (var k = 0; k <=width; k = k + 70) {
      divisions.push(new Divisions(k, 580, 8, divisionHeight));
    }



  for (var k = 56; k <= 800; k = k + 50) {
      plinkos.push(new Plinko(k, 80));
  }
  for (var k = 56; k <= 800; k = k + 50) {
      plinkos.push(new Plinko(k, 180));
  }
  for (var k = 80; k <= 800; k = k + 50) {
      plinkos.push(new Plinko(k, 280));
  }
  for (var k = 56; k <= 800; k = k + 50) {
    plinkos.push(new Plinko(k, 380));
}

    }



function draw() {
    background(0);

    noStroke();
    textSize(35)
    fill("white")
    text("Score  " + score, 20, 50)

    noStroke();
    textSize(35)
    fill("white")
    text("500", 10, 470)
    noStroke();
    textSize(35)
    fill("white")
    text("500", 75, 470)
    noStroke();
    textSize(35)
    fill("white")
    text("100", 145, 470)
    noStroke();
    textSize(35)
    fill("white")
    text("100", 215, 470)
    noStroke();
    textSize(35)
    fill("white")
    text("500", 285, 470)
    noStroke();
    textSize(35)
    fill("white")
    text("300", 355, 470)
    noStroke();
    textSize(35)
    fill("white")
    text("100", 425, 470)
    noStroke();
    textSize(35)
    fill("white")
    text("400", 495, 470)
    noStroke();
    textSize(35)
    fill("white")
    text("200", 565, 470)
    noStroke();
    textSize(35)
    fill("white")
    text("400", 635, 470)

    Engine.update(engine);
    border1.display();
    border2.display();
    border3.display();
    point.display()




    if (frameCount % 60 === 0) {
        particles.push(new Particle(random(width / 2 - 50, width / 2 + 50), 0, 11));
    }
    for (var a = 0; a < particles.length; a++) {
        particles[a].display();
    }

    for (var m = 0; m < divisions.length; m++) {

        divisions[m].display();
    }
    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();
    }
}

function mousePressed()
{
 if(GmaeState!=="end")
 {
   particle = new Particle(mouseX,10,10,10)
 }
}