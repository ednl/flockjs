class Boid {
	constructor(x, y) {
		this.pos = createVector(x, y);
		this.vel = createVector();
		this.acc = createVector();
		this.size = 10;
	}

	update() {
		// TODO: update acceleration here
		this.acc.x += random(-1, 1);
		this.acc.y += random(-1, 1);

		// Euler
		this.vel.add(this.acc);
		this.vel.limit(5);
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

		// Reset acceleration
		this.acc.mult(0);
	}

	show() {
		push();
		translate(this.pos.x, this.pos.y);
		rotate(this.vel.heading());
		stroke(0, 255, 0);
		strokeWeight(2);
		noFill();
		beginShape();
		vertex(this.size, 0);
		const t = -this.size / 2;
		vertex(t, t);
		vertex(t, -t);
		endShape(CLOSE);
		pop();
	}
}
