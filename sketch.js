// Zombulator by Nathaniel

var backgroundColor;

const MIN_SIZE = 25;
const MAX_SIZE = 200;
const NUMBER_OF_ZOMBIES = 100;
const NUMBER_OF_HUMANS = 100;

var zombieXs;
var zombieYs;
var zombieSizes;
var zombieColors;

var humanXs;
var humanYs;
var humanSizes;
var humanColors;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(52, 63, 81);
  initializeZombies();
  initializeHumans();
}

function draw() {
  background(backgroundColor);
  noStroke();
  drawZombies();
  drawHumans();
}

function initializeZombies() {
  zombieXs = [];
  zombieYs = [];
  zombieSizes = [];
  zombieColors = [];
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    zombieXs[i] = random(0, windowWidth);
    zombieYs[i] = random(0, windowHeight / 2);
    zombieSizes[i] = random(MIN_SIZE, MAX_SIZE);
    zombieColors[i] = color(random(50, 255), random(50, 255), random(50, 255), 150);
  }
}

function initializeHumans() {
  humanXs = [];
  humanYs = [];
  humanSizes = [];
  humanColors = [];
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    humanXs[i] = random(0, windowWidth);
    humanYs[i] = random(windowHeight - 200, windowHeight);
    humanSizes[i] = random(MIN_SIZE, MAX_SIZE);
    humanColors[i] = color(random(50, 250), random(50, 250), random(50, 250), 150);
  }
}

function drawZombies() {
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    fill(zombieColors [i]);
    ellipse(zombieXs[i], zombieYs[i], zombieSizes[i], zombieSizes[i]);
    fill(0, 0, 0);
    text("zombie", zombieXs[i], zombieYs[i]);
 }
}

function drawHumans() {
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    fill(humanColors [i]);
    ellipse(humanXs[i], humanYs[i], humanSizes[i], humanSizes[i]);
    fill(0, 0, 0);
    text("human", humanXs[i], humanYs[i]);
  }
}

