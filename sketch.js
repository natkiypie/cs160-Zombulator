// Zombulator by Nathaniel Pierce

function setup() {
	createCanvas(1000, 1000);
}

function draw() {
	fill(0, 0, 0);
	ellipse(500, 500, mouseX, mouseY);
	fill(256, 256, 256);
	ellipse(500, 500, 500, 500);
	fill(57, 81, 130);
	ellipse(500, 500, 400, 400);
	fill(130, 98, 11);
	ellipse(500, 500, 300, 300);
	fill(255, 0, 0);
	ellipse(mouseY, mouseX, 200,200);
	fill(150, 150, 200);
	ellipse(500, 500, 90, 90);
	if (mouseIsPressed) {
		fill(299, 255, 66);
	} else {
		fill (255, 0, 233);
	}
	ellipse(mouseX, mouseY, 20, 20);
}
