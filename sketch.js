// Zombulator by Nathaniel

const MIN_SIZE = 5; // jshint ignore:line
const MAX_SIZE = 50; // jshint ignore:line
const POPULATION_SIZE = 100; //jshint ignore:line 

var backgroundColor;
var population = [];
var zombieCount = 0;
var humanCount = 0;
var sound = new Audio('sounds/TRS-80Naturescent.mp3');


function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(255);
  initializePopulation();
  sound.play();
}

function draw() {
  background(backgroundColor);
  noStroke();
  drawPopulation();
  movePopulation();
  drawPopulationCounts();
  handleCollisions();
  changeDirection();
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

function initializeZombie() {
  return {
    type: "zombie",
    condition: "alive",
    a: 0.2,
    v: 0,
    d: -0.5,
    x: random(0, windowWidth),
    y: random(0, 200),
    speed: random(0.25, 2),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(80, random(50, 150), 0),
    draw: function() {
      fill(this.color);
      text("z", this.x, this.y, this.size);
    },
    move: function() {
      var direction = random(0, 100);
      if (direction < 10) {
        this.x += this.speed; 
      } else if (direction < 20) {
        this.x -= this.speed;
      } else if (direction < 90) {
        this.y += this.speed; 
      } else {
        this.y -= this.speed; 
      }
    },
    up: function() {
      var direction = random(0, 100);
      if (direction < 20) {
        this.x += this.speed; 
      } else if (direction < 40) {
        this.x -= this.speed;
      } else if (direction < 60) {
        this.y += this.speed; 
      } else {
        this.y -= this.speed; 
      }
    },
    down: function() {
      var direction = random(0, 100);
      if (direction < 20) {
        this.x += this.speed; 
      } else if (direction < 40) {
        this.x -= this.speed;
      } else if (direction < 80) {
        this.y += this.speed; 
      } else {
        this.y -= this.speed; 
      }
    },
    right: function() {
      var direction = random(0, 100);
      if (direction < 40) {
        this.x += this.speed; 
      } else if (direction < 60) {
        this.x -= this.speed;
      } else if (direction < 80) {
        this.y += this.speed; 
      } else {
        this.y -= this.speed; 
      }
    },
    left: function() {
      var direction = random(0, 100);
      if (direction < 20) {
        this.x += this.speed; 
      } else if (direction < 60) {
        this.x -= this.speed;
      } else if (direction < 80) {
        this.y += this.speed; 
      } else {
        this.y -= this.speed; 
      }
    },
   drop: function() {
      this.y += this.v;
      this.v += this.a;
      if (this.y + (this.size / 2) >= windowHeight) {
        this.y = windowHeight - (this.size / 2);
        this.v = this.v *= this.d;
      }
    },
    stop: function() {
      this.x = this.x;
      this.y = this.y;
    },
    isTouching: function(target) {
      if (this.type == target.type || target.condition == "convert" || target.condition == "dead") return false;
      var distance = dist(this.x, this.y, target.x, target.y);
      return distance <= (this.size/2 + target.size/2);
    }
  };
}

function initializeHuman() {
  return {
    type: "human",
    condition: "alive",
    x: random(0, windowWidth),
    y: random(windowHeight - 200, windowHeight),
    a: 0.2,
    v: 0,
    d: -0.5,
    speed: random(0.25, 2),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(140, 200), 120, 120),
    draw: function() {
      fill(this.color);
      text("h", this.x, this.y, this.size);
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
    up: function() {
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
    down: function() {
      var direction = random(0, 100);
      if (direction < 10) {
        this.x += this.speed; 
      } else if (direction < 20) {
        this.x -= this.speed;
      } else if (direction < 90) {
        this.y += this.speed; 
      } else {
        this.y -= this.speed; 
      }
    },
    right: function() {
      var direction = random(0, 100);
      if (direction < 70) {
        this.x += this.speed; 
      } else if (direction < 80) {
        this.x -= this.speed;
      } else if (direction < 90) {
        this.y += this.speed; 
      } else {
        this.y -= this.speed; 
      }
    },
    left: function() {
      var direction = random(0, 100);
      if (direction < 10) {
        this.x += this.speed; 
      } else if (direction < 80) {
        this.x -= this.speed;
      } else if (direction < 90) {
        this.y += this.speed; 
      } else {
        this.y -= this.speed; 
      }
    },
    drop: function() {
      this.y += this.v;
      this.v += this.a;
      if (this.y + (this.size / 2) >= windowHeight) {
        this.y = windowHeight - (this.size / 2);
        this.v = this.v *= this.d;
      }
    },
    stop: function() {
      this.x = this.x;
      this.y = this.y;
    },
    isTouching: function(target) {
      if (this.type == target.type && target.condition != "convert" || target.condition == "dead") return false;
      var distance = dist(this.x, this.y, target.x, target.y);
      return distance <= (this.size/2 + target.size/2); 
    }
  };
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

function drawPopulationCounts() {
  fill(30);
  textAlign(CENTER);
  textSize(30);
  text("zombies: " + zombieCount, width / 2, 100);
  text("humans: " + humanCount, width / 2, height - 100);
}

function handleCollisions() {
  for(var i = 0; i < POPULATION_SIZE; ++i) {
    var attacker = population[i];
    for (var j = i + 1; j < POPULATION_SIZE; ++j) {
      var target = population[j];
      if (attacker.isTouching(target)) {
        fight(attacker, target);
      }
    }
  }
}

function fight(attacker, target) {
  if (attacker.type == "human" && attacker.size > target.size) {
    target.condition = "dead";
    target.move = target.drop;
    if (target.condition == "dead") {
      --zombieCount;
    }
    } else if (attacker.type == "zombie" && attacker.size > target.size) {
    target.condition = "convert";
    target.color = attacker.color;
    target.move = attacker.move;
    target.speed = attacker.speed;
      if (target.condition == "convert");
      target.draw = attacker.draw;
      ++zombieCount;
      --humanCount;
    }
}

function changeDirection() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    var traveler = population[i];
    if (traveler.condition == "alive" && traveler.y <= 0) {
      traveler.move = traveler.down;
    } else if (traveler.condition == "alive" && traveler.y >= windowHeight) {
      traveler.move = traveler.up;
    } else if (traveler.condition == "alive" && traveler.x <= 0) {
      traveler.move = traveler.right;
    } else if (traveler.condition == "alive" && traveler.x >= windowWidth) {
      traveler.move = traveler.left;
    }
  }
}
