let fg, bg;
let flock = [];

function setup() {
	createCanvas(800, 800);
	fg = color(0);
	bg = color(51);
	colorMode(HSB);

	const w = width / 2;
	const h = height / 2;
	for (let i = 0; i < 200; ++i) {
		flock.push(new Boid(w, h));
	}
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
