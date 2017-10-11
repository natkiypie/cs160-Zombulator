// Zombulator by Nathaniel Pierce

var zombieY = 100;
var zombieV = 1; //velocity.
var zombieA = 0.2;
var zombieColor;
var backgroundColor;

function setup() {
	createCanvas(windowWidth, windowHeight);
  backgroundColor = color(79, 100, 112);
  zombieColor = color(151, 175, 65);
}

function draw() {
  background(backgroundColor);
  noStroke();
	fill(zombieColor);
  ellipse(windowWidth / 2, zombieY, 80, 80);
  zombieY += zombieV; //same thing as zombieY = zombieY +10;
  zombieV += zombieA;

  }

