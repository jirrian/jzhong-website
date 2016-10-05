var sketchCanvas;
var c1, c2;

function setup() {
	sketchCanvas = createCanvas(window.innerWidth, window.innerHeight);
    sketchCanvas.parent('sketch');
    // gradient
	c1 = color(147, 177, 226);
  	c2 = color(255, 209, 231);

	drawGradient();
}

function draw() {
	// resize canvas on window resize
	window.onresize = function(event) {
    	sketchCanvas.size(window.innerWidth, window.innerHeight);

		drawGradient();
	};

	
}

function drawGradient(){
	for (var i = 0; i <= width; i+=8) {
      var inter = map(i, 0, width, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      fill(c);
      if((i / 8) % 2 == 0){
      	for(var j = 0; j <= height; j+=8){
      		ellipse(i,j,2);
      	}
      }
      else{
      	for(var j = 4; j <= height; j+=8){
      		ellipse(i,j,2);
      	}
      }
      
    }
}