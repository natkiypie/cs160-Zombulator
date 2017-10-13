// Zombulator by Nathaniel Pierce

var zombieY = 100;
var zombieV = 0;
var zombieA = 0.2;
var zombieDamping = -0.5;
var zombieSize = 80;
var zombieColor;

var humanY = 100;
var humanV = 0;
var humanA = 0.6;
var humanDamping = -0.8;
var humanSize = 80;
var humanColor;

var backgroundColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(114, 168, 255);
  zombieColor = color(242, 255, 0);
  humanColor = color(random(200, 255), random(200, 255), random(200, 255));
}

function draw() {
  background(backgroundColor);
  noStroke();

  // Draw zombie
  fill(zombieColor);
  ellipse(windowWidth / 2, zombieY, zombieSize, zombieSize);

  // Move zombie
  zombieY += zombieV;
  zombieV += zombieA;
  if (zombieY + (zombieSize / 2) >= windowHeight) {
    zombieY = windowHeight - (zombieSize / 2);
    zombieV *= zombieDamping;
  }

  // Draw human
  fill(humanColor);
  ellipse(windowWidth / 4, humanY, humanSize, humanSize);
  fill(0);
  text("human", windowWidth / 4, humanY);

  // Move human
  humanY += humanV;
  humanV += humanA;
  if (humanY + (humanSize / 2) >= windowHeight) {
    humanY = windowHeight - (humanSize / 2);
    humanV *= humanDamping;
  }

}
