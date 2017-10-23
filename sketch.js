// Zombulator by Nathaniel

var backgroundColor;

const MIN_SIZE = 5;
const MAX_SIZE = 50;
const NUMBER_OF_ZOMBIES = 100;
const NUMBER_OF_HUMANS = 100;

var zombies;

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
  zombies = [];
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
  initializeZombie(i);
  }
}

function initializeZombie(index) {
  zombies[index] = {
    x: random(0, windowWidth),
    y: random(0, 200),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(100, 255), random(50, 150), random(50, 150), 150)
  };
}

function initializeHumans() {
  humanXs = [];
  humanYs = [];
  humanSizes = [];
  humanColors = [];
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    initializeHuman(i);
  }
}

function initializeHuman(index){
  humanXs[index] = random(0, windowWidth);
  humanYs[index] = random(windowHeight - 200, windowHeight);
  humanSizes[index] = random(MIN_SIZE, MAX_SIZE);
  humanColors[index] = color(random(50, 250), random(50, 250), random(50, 250), 150);
}

function drawZombies() {
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    drawZombie(i);
 }
}

function drawZombie(index) {
  var zombie = zombies[index];
  fill(zombie.color);
  ellipse(zombie.x, zombie.y, zombie.size, zombie.size);
  fill(0, 0, 0);
  text("zombie", zombie.x, zombie.y);
}

function drawHumans() {
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    drawHuman(i);
  }
}

function drawHuman(index){
  fill(humanColors [index]);
  ellipse(humanXs[index], humanYs[index], humanSizes[index], humanSizes[index]);
  fill(0, 0, 0);
  text("human", humanXs[index], humanYs[index]);
}

