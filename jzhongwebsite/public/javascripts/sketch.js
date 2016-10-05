var sketchCanvas;

function setup() {
	sketchCanvas = createCanvas(window.innerWidth, window.innerHeight);
    sketchCanvas.parent('sketch');

}

function draw() {
	window.onresize = function(event) {
    	sketchCanvas.size(window.innerWidth, window.innerHeight);
	};

	background(209);
  	ellipse(50, 50, 80, 80);
}