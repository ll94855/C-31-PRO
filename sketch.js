const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var plinkoes = [];
var divisions = [];
var particles = [];

var divisionHeight = 200;

function preload() {
}

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(240,800,480,20);
    
}

function draw()
{
    background(256, 256, 256);
    Engine.update(engine);
    generatePlinkoes();
    generateDivisions();
    generateParticles();
    ground.display();

    text("Nothing looks like what it seems!", 240,400);
}

function generatePlinkoes()
{
    for(var j = 40; j<=width; j=j+50)
    {
        plinkoes.push(new Plinko(j,75));
    }

    for(var j = 15; j<=width-10; j=j+50)
    {
        plinkoes.push(new Plinko(j,175));
    }

    for(var j = 40; j<=width; j=j+50)
    {
        plinkoes.push(new Plinko(j,275));
    }

    for(var j = 15; j<=width-10; j=j+50)
    {
        plinkoes.push(new Plinko(j,375));
    }

    for(var j = 0; j< plinkoes.length; j++) {
        plinkoes[j].display();
    }
}

function generateDivisions()
{
    for(var k = 0; k <=width; k = k+80)
    {
        divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
    }
    for(var k = 0; k< divisions.length; k++) {
        divisions[k].display();
    }
}

function generateParticles()
{
    if(frameCount%60===0){
        particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    }

    for(var j = 0; j< particles.length; j++) {
        particles[j].display();
    }
}
