const batch = 100;

let fg, bg;
let flock = [];

function addBoids(n) {
	for (let i = 0; i < n; ++i) {
		flock.push(new Boid());
	}
}

function mousePressed() {
	if (mouseX < width && mouseY < height) {
		if (mouseButton === RIGHT)
			flock = [];
		addBoids(batch);
	}
}

function setup() {
	createCanvas(800, 800);
	fg = color(0);
	bg = color(51);
	colorMode(HSB);
	addBoids(batch);
}

function draw() {
	background(bg);
	translate(0, height);
	scale(1, -1);

	for (const boid of flock) {
		boid.update();
		boid.show();
	}
}
