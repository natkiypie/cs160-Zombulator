// Zombulator by Nathaniel Pierce

var zombieY = 100;
var zombieV = 0;
var zombieA = 0.2;
var zombieDamping = -0.5;
var zombieSize = 80;
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
  ellipse(windowWidth / 2, zombieY, zombieSize, zombieSize);
  zombieY += zombieV;
  zombieV += zombieA;
  if (zombieY + (zombieSize / 2) >= windowHeight) {
    zombieY = windowHeight - (zombieSize / 2);
    zombieV = zombieV *= zombieDamping;
  }
}

