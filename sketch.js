// Zombulator by Nathaniel Pierce

var zombieA = 50;
var zombieB = 100;
var zombieC = 150;
var zombieD = 75;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {

  background(255, 255, 255);

  //zombieA
	fill(150, 188, 60);
  stroke(67, 81, 50);
  strokeWeight(10);
	ellipse(zombieA, 50, 80, 80);
  zombieA = zombieA + 2;
  if (zombieA >= windowWidth) {
      zombieA = 0; 
  }

  //zombieB
	fill(201, 201, 22);
  stroke(215, 255, 40);
  strokeWeight (6);
	ellipse(zombieB, 100, 60, 60);
  zombieB = zombieB + 3;
  if (zombieB >= windowWidth) {
      zombieB = 0; 
  }

  //zombieC aka fatty
  fill(99, 79, 112);
  stroke (28, 12, 38);
  strokeWeight(15);
	ellipse(zombieC, 150, 100, 100);
  zombieC = zombieC + 1;
  if (zombieC >= windowWidth) {
      zombieC = 0;
  }

  //zombieD
  fill(255, 177, 22);
  stroke (220, 0, 255);
  strokeWeight(5);
	ellipse(zombieD, 150, 20, 20);
  zombieD = zombieD + 6;
  if (zombieD >= windowWidth) {
      zombieD = 0;
  }

}

