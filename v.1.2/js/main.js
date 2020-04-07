console.log('mainjs charged');

// MAIN VARS
let mainCanvas;
let w = window.innerWidth;
let h = window.innerHeight - 250;
let planets = []; 
let diameter = 130;
let multiplier = 10;
let colors =['#FF9A80', '#E87B74', '#FF8CAD', '#E874CF','#EC80FF', '#668AFF', '#59D7FF']
let sizePlanets = [13, 10, 20, 15, 25, 40, 9];

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
		planets.push(new Planet(w/7+1.23*diameter*i, 
								h/2, 
								diameter-20, // sizes[i], 
								colors[i],
								sizePlanets[i],
								i, 
								(i+1)*multiplier));
		console.log(planets);
	}
}

// DRAW FUNCTION
function draw() {
	// BG
	background(0,69)

	// PLANET CREATION
	for (let i = 0; i < planets.length; i++) {
		// PLANETS CREATION
		planets[i].create();
		// LINE BETWEEN PLANETS CREATION
		stroke('white');
		strokeWeight(0.2);
		if(i<6) {
			line(planets[i].planetX, planets[i].planetY, planets[i+1].planetX, planets[i+1].planetY);
		}
	}
}
