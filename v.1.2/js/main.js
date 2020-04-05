console.log('mainjs charged');

// MAIN VARS
let mainCanvas;
let w = window.innerWidth;
let h = window.innerHeight - 250;
let planets = [];
let diameter = 130;
let multiplier = 10;

// RESIZE FUNCTION
window.onresize = function(event) {
	mainCanvas = createCanvas(windowWidth - 60, windowHeight - 250);
	mainCanvas.parent('mainCanvas');
	background(0);
};

// SETUP FUNCTION
function setup() {
	let mainCanvas = createCanvas(windowWidth - 60, windowHeight - 250);
	mainCanvas.parent('mainCanvas');
	background(0);
	// ROW OF SEVEN PLANETS LIST
	let cols = 7;
	for (let i = 0; i < cols; i++) {
		planets.push(new Planet(w / 7 + 1.23 * diameter * i, h / 2, diameter - 20, i, (i + 1) * multiplier));
		console.log(planets);
	}
}

// DRAW FUNCTION
function draw() {
	// BG
	background(0);
	// PLANET CREATION
	for (let i = 0; i < planets.length; i++) {
		planets[i].create();
		// LINE BETWEEN PLANETS CREATION
		stroke('white');
		strokeWeight(0.5);
		line(planets[3].px, planets[3].py, planets[i].px, planets[i].py);
		// line(planets[i].px, planets[i].py, planets[i+1].px, planets[i+1].py);
	}
}
