class Boid {
	constructor() {
		this.pos = createVector(random(width), random(height));
		this.vel = createVector();
		this.acc = createVector();
		let h = random(45);  // random hue red-yellow
		if (h < 15)
			h *= 3;  // not so many red ones
		this.col = color(h, 100, 100);
		this.size = map(h, 0, 45, 16, 8);  // red ones are bigger
		this.maxSpeed = this.size / 4;  // big ones go faster
		this.head = 0;
	}

	update() {
		// TODO: determine acceleration from neighbours
		this.acc.x = random(-1, 1);
		this.acc.y = random(-1, 1);

		// Euler
		this.vel.add(this.acc);
		this.vel.limit(this.maxSpeed);
		this.head = this.vel.heading();

		let val = 0;
		let count = 0;
		for (const other of flock) {
			if (other !== this && this.pos.dist(other.pos) < 50) {
				val += other.head;
				count++;
			}
		}
		if (count) {
			val /= count;
			const da = (val - this.head) * 0.2;
			this.vel.rotate(da);
			this.head += da;
		}

		this.pos.add(this.vel);

		// Wrap around
		if (this.pos.x > width + 10) {
			this.pos.x = -10;
		} else if (this.pos.x < -10) {
			this.pos.x = width + 10;
		}
		if (this.pos.y > height + 10) {
			this.pos.y = -10;
		} else if (this.pos.y < -10) {
			this.pos.y = height + 10;
		}
	}

	show() {
		push();
		translate(this.pos.x, this.pos.y);
		rotate(this.head);
		strokeWeight(1);
		// stroke(this.col);
		stroke(fg);
		fill(this.col);
		beginShape();
		vertex(this.size, 0);
		const t = -this.size / 2;
		vertex(t, t);
		vertex(t, -t);
		endShape(CLOSE);
		pop();
	}
}
