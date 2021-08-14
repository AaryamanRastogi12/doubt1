const Engine = Matter.engine;
const World = Matter.world;
const Body = Matter.bodies;
const Constraint = Matter.constraint;

function preload() {

}

function setup() {
  createCanvas(800, 400);


  snow1 = new Snow(10, 20, 70, 80);

  //createSprite(400, 200, 50, 50);


}

function draw() {
  background("black")


  snow1.display();

  drawSprites();



}


