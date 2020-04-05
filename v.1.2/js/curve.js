console.log('curvejs charged')

class Planet {
	constructor(x, y, size, id, mult) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.id = id;
		this.mult = mult;
		this.px;
		this.py;
	}

	create() {
		// CIRCLE
		noFill();
		stroke('white');
		strokeWeight(1)
		ellipse(this.x, this.y, this.size, this.size)
		// POINT
		stroke('white');
		strokeWeight(10);
		this.px = this.x + cos(frameCount/this.mult)*this.size/2;
		this.py = this.y + sin(frameCount/this.mult)*this.size/2;
		point(this.px,this.py);
	}
}