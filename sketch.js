// Zombulator by Nathaniel Pierce

var zombieX = 50; // Step 1: This is an assignment statement. The "equal" sign means assignment. We are declaring a fact to the machine(50) and assigning it a variable(zombieX).
var zombie2X = 100;

function setup() {
	createCanvas(800, 800);
}

function draw() {
  background(255, 255, 255); // Step 4: clear background.
	fill(101, 122, 74); // green
	ellipse(zombieX, 50, 80, 80); // Step 2: use variable.
	fill(132, 89, 84); // red
	ellipse(zombie2X, 100, 80, 80);
  zombieX = zombieX + 1; // step 3: increment variable.
  zombie2X = zombie2X + 3;
  if (zombieX >= 850) {
      zombieX = 0; 
}
if (zombie2X >= 850) {
      zombie2X = 0; 
}

}

// Each line in between the curly brackets of the draw function is a statement. A statement is like a complete sentence. A semicolon terminates a statement(like a period!).

// Remember, as code, the way something is drawn is totally separate from what it is(a picture of a zombie is not a zombie).

// This is a program written in Javascript, using a p5.js library(The library is preconfigured code that someone in the community made). When we give arguments to a function, the function calls the p5.js environment's library.

// Every function call consists of two main parts: the identifier (the name of the function or the command) and a parenthesized, comma separated argument list (the information the function needs in order to do its job).

// We're writing a procedural program in which one statement follows the next and order matters.

// We're using two concepts of graphics: the painters model(if I pick up a pen it's going to stay in my hand until I pick up a different color pen) and the drawloop(In the p5.js environment, the code inside the draw function is set to loop). This allows us to do animation.
