console.log('curvejs charged')

class Planet {
	constructor(xOrbit, yOrbit, sizeOrbit, color, sizePlanet, id, mult) {
		this.xOrbit = xOrbit;
		this.yOrbit = yOrbit;
		this.sizeOrbit = sizeOrbit;
		this.color = color;
		this.sizePlanet = sizePlanet;
		this.id = id;
		this.mult = mult;
		this.planetX;
		this.planetY;
	}

	create() {
		// CIRCLE
		noFill();
		stroke(this.color);
		strokeWeight(.1)
		ellipse(this.xOrbit, this.yOrbit, this.sizeOrbit, this.sizeOrbit)
		// POINT
		stroke(this.color);
		strokeWeight(this.sizePlanet);
		this.planetX = this.xOrbit + cos(frameCount/this.mult)*this.sizeOrbit/2;
		this.planetY = this.yOrbit + sin(frameCount/this.mult)*this.sizeOrbit/2;
		point(this.planetX,this.planetY);
	}
}