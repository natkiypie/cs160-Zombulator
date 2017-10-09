// Zombulator by Nathaniel Pierce

var zombieA = 50; // Step 1: This is an assignment statement. The "equal" sign means assignment. We are declaring a fact to the machine(50) and assigning it a variable(zombieA).

var zombieB = 100;

var zombieC = 150;

var zombieD = 75;

function setup() {

	createCanvas(800, 800);

}

function draw() {

  background(255, 255, 255); // clear background.

  //zombieA
	fill(101, 122, 74); // color
  strokeWeight(10); // stroke
	ellipse(zombieA, 50, 80, 80); // draw circle using variable.
  zombieA = zombieA + 2; // increment variable.
  if (zombieA >= 850) { // make zombie reappear.
      zombieA = 0; 
  }

  //zombieB
	fill(201, 201, 22);
  strokeWeight (6);
	ellipse(zombieB, 100, 60, 60);
  zombieB = zombieB + 3;
  if (zombieB >= 850) {
      zombieB = 0; 
  }

  //zombieC
  fill(142, 142, 99);
  strokeWeight(15);
	ellipse(zombieC, 150, 100, 100);
  zombieC = zombieC + 1;
  if (zombieC >= 850) {
      zombieC = 0;
  }

  //zombieD
  fill(255, 177, 22);
  strokeWeight(5);
	ellipse(zombieD, 150, 20, 20);
  zombieD = zombieD + 6;
  if (zombieD >= 850) {
      zombieD = 0;
  }

}

// Each line in between the curly brackets of the draw function is a statement. A statement is like a complete sentence. A semicolon terminates a statement(like a period!).

// Remember, as code, the way something is drawn is totally separate from what it is(a picture of a zombie is not a zombie).

// This is a program written in Javascript, using a p5.js library(The library is preconfigured code that someone in the community made). When we give arguments to a function, the function calls the p5.js environment's library.

// Every function call consists of two main parts: the identifier (the name of the function or the command) and a parenthesized, comma separated argument list (the information the function needs in order to do its job).

// We're writing a procedural program in which one statement follows the next and order matters.

// We're using two concepts of graphics: the painters model(if I pick up a pen it's going to stay in my hand until I pick up a different color pen) and the drawloop(In the p5.js environment, the code inside the draw function is set to loop). This allows us to do animation.
