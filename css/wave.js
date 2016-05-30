var mover = .01; 
var spacer = 0.2; 
function setup() {
	var cnv = createCanvas(700, 125);
	cnv.parent("sketcharea");
	smooth();

}

function draw() {
	background(#607D8B); 
	var rad = map(mouseX, 0, width, .02, .05); 
	mover -= rad; 
	if (mover > TWO_PI) {
		mover = 0;
	}

	var a = .05;
	for (var i=0; i<width; i+=3) {
		a += spacer; 
		var j = cos(mover+a)*47.0; 
		fill(255, 80); 
		ellipse(i+ 20, height/2- j, 28, -13);
	}
}
