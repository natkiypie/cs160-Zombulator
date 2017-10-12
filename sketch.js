// Zombulator by Nathaniel Pierce

var zombieY = 100;
var zombieX;
var zombieV = 0;
var zombieA = 0.2;
var zombieDamping = -0.5;
var zombieSize = 80;
var zombieColor;

var humanY = 100;
var humanX;
var humanV = 0;
var humanA = 0.1;
var humanDamping = -0.6;
var humanSize = 80;
var humanColor;

var backgroundColor;

function setup() {
	createCanvas(windowWidth, windowHeight);
  backgroundColor = color(79, 100, 112);
  zombieColor = color(151, 175, 65);
  zombieX = random(0, windowWidth);
  humanColor = color(255, 226, 206);
  humanX = random(0, windowWidth);
}

function draw() {
  background(backgroundColor);
  noStroke();
	fill(zombieColor);
  ellipse(zombieX, zombieY, zombieSize, zombieSize);
  zombieY += zombieV;
  zombieV += zombieA;
  if (zombieY + (zombieSize / 2) >= windowHeight) {
    zombieY = windowHeight - (zombieSize / 2);
    zombieV = zombieV *= zombieDamping;
  }

  fill(humanColor);
  ellipse(humanX, humanY, humanSize, humanSize);
  humanY += humanV;
  humanV += humanA;
  if (humanY + (humanSize / 2) >= windowHeight) {
    humanY = windowHeight - (humanSize / 2);
    humanV = humanV *= humanDamping;
  }

}

