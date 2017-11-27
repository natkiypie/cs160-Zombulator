// Zombulator by Nathaniel

const MIN_SIZE = 5; // jshint ignore:line
const MAX_SIZE = 50; // jshint ignore:line
const POPULATION_SIZE = 200; //jshint ignore:line 

var backgroundColor;
var population = [];
var zombieCount = 0;
var humanCount = 0;
var myFont;

function preload() {
  myFont = loadFont('fonts/strange/Strange.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(35, 35, 35);
  initializePopulation();
}

function draw() {
  background(backgroundColor);
  noStroke();
  drawPopulation();
  movePopulation();
  drawPopulationCounts();
  handleCollisions();
}

function handleCollisions() {
  for(var i = 0; i < POPULATION_SIZE; ++i) {
    var attacker = population[i];
    for (var j = i + 1; j < POPULATION_SIZE; ++j){
      var target = population[j];
      if (attacker.isTouching(target)) {
        print("Fight!");
      }

    }
  }
}

function initializePopulation() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    var thing = random(0, 100);
    if (thing <= 50) {
      population[i] = initializeZombie();
      ++zombieCount;
    } else {
      population[i] = initializeHuman();
      ++humanCount;
    }
  }
}

function drawPopulationCounts() {
  fill(255, 0, 0);
  textAlign(CENTER);
  textFont('Strange', 80);
  text("zombies: " + zombieCount, width / 2, 100);
  text("humans: " + humanCount, width / 2, height - 100);
}

function drawPopulation() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    population[i].draw();
  }
}

function movePopulation() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    population[i].move();
  }
}

function initializeZombie() {
  return {
    type: "zombie",
    x: random(0, windowWidth),
    y: random(0, 200),
    speed: random(0.5, 3.5),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(80, random(50, 150), 0),
    draw: function() {
      fill(this.color);
      ellipse(this.x, this.y, this.size, this.size);
    },
    move: function() {
      var direction = random(0, 100);
      if (direction < 30) {
        this.x += this.speed;
      } else if (direction < 50) {
        this.x -= this.speed;
      } else if (direction < 70) {
        this.y -= this.speed; 
      } else {
        this.y += this.speed;
      }
    },
    isTouching: function(target) {
      if (this.type == target.type) return false;
      var distance = dist(this.x, this.y, target.x, target.y);
      return distance <= (this.size/2 + target.size/2);
    }
  };
}

function initializeHuman() {
  return {
    type: "human",
    x: random(0, windowWidth),
    y: random(windowHeight - 200, windowHeight),
    speed: random(0.25, 1),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(140, 200), 120, 120),
    draw: function() {
      fill(this.color);
      ellipse(this.x, this.y, this.size, this.size);
    },
    move: function() {
      var direction = random(0, 100);
      if (direction < 10) {
        this.x += this.speed; 
      } else if (direction < 20) {
        this.x -= this.speed;
      } else if (direction < 30) {
        this.y += this.speed; 
      } else {
        this.y -= this.speed; 
      }
    },
    isTouching: function(target) {
      if (this.type == target.type) return false;
      var distance = dist(this.x, this.y, target.x, target.y);
      return distance <= (this.size/2 + target.size/2); 
    }
  };
}
