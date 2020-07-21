let flock = [];

function setup() {
	createCanvas(800, 800);
	const w = width / 2;
	const h = height / 2;
	for (let i = 0; i < 100; ++i) {
		flock.push(new Boid(w, h));
	}
}

function draw() {
	background(51);
	translate(0, height);
	scale(1, -1);

	for (const boid of flock) {
		boid.update();
		boid.show();
	}
}
