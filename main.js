console.log('1.js-connected');

//////////////// CONTROL PARAMS ///////////
let PARAMS = {
	// PARAMS
};
//////////////// CONTROL PARAMS ///////////

//////////////// TWEAKPANE ////////////////
//////////////// TWEAKPANE ////////////////

//////////////// MICROBIT PAIRING /////////
//////////////// MICROBIT PAIRING /////////

//////////////// CANVAS ///////////////////
// CTX-1-BACKGROUND
const canvas1 = document.querySelector('#layer-1');
const ctx1 = canvas1.getContext('2d');
// CTX-2-POINTER
const canvas2 = document.querySelector('#layer-2');
const ctx2 = canvas2.getContext('2d');
// SIZING CANVASES
let w = (canvas1.width = window.innerWidth);
let h = (canvas1.height = window.innerHeight);
// CREATING BRUSH AND POINTER
let brush = new Brush(ctx1,ctx2);
let frame, mx, my;
let pointer = new Brush(ctx1,ctx2);

// resize canvas
window.addEventListener('resize', resizeCanvas);
function resizeCanvas() {
	canvas1.width = window.innerWidth;
	canvas1.height = window.innerHeight;
	canvas2.width = window.innerWidth;
	canvas2.height = window.innerHeight;
}
resizeCanvas();
//////////////// CANVAS ///////////////////

//////////////// SLIDE-PANEL //////////////
//////////////// SLIDE-PANEL //////////////