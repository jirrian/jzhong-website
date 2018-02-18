var sketchCanvas;
var c1, c2;
var i, j, k;

function setup() {
	sketchCanvas = createCanvas(window.innerWidth, window.innerHeight);
    sketchCanvas.parent('sketch');

    // pick colors
    var currentDate = new Date();
    var hour = currentDate.getHours();

    if(hour > 4 && hour < 10){
    	c1 = color(147, 177, 226);
  		c2 = color(255, 209, 231);
    }
    else if(hour > 10 && hour < 16){
    	c1 = color(153, 255, 0);
  		c2 = color(232, 0, 81);
    }
  	else if(hour > 16 && hour < 22){
		c1 = color(255, 80, 0);
  		c2 = color(177, 0, 226);
  	}
  	else{
  		c1 = color(0, 246, 255);
  		c2 = color(79, 0, 10);
  	}
	
  i = 0;
  j = 0;
  k = 0;
	//drawGradient();
}

function draw() {
	// resize canvas on window resize
	window.onresize = function(event) {
    	sketchCanvas.size(window.innerWidth, window.innerHeight);

		drawGradientGrid();
	};

  for(i = 0; i <= width; i += 8) {
      var inter = map(i, 0, width, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      fill(c);
      
        if(j <= height){
          ellipse(i,j,2);
          j += 8;
        }
        else{
          j = 0;
        }
    }
	
}

// draws gradient circles in a grid
function drawGradientGrid(){
  for (var i = 0; i <= width; i+=8) {
    var inter = map(i, 0, width, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    fill(c);
    for(var j = 0; j <= height; j+=8){
     ellipse(i,j,2);
    }
  }
}


// draws gradient circles
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