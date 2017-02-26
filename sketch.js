function setup() {
  createCanvas(800, 600);
  frameRate(7);
  background(10);
  noFill();
}

function draw() {
  
  push();
  translate(600,350);
  polygon(0, 0, frameCount+30, frameCount/10); 
  pop();
  var col1=color('#7AC143');
  var col2=color('#6073B7');
  stroke(lerpColor(col1,col2,frameCount/120));
 
  
  push();
  translate(200,150);
  rotate(frameCount);
  polygon(frameCount*0.3, frameCount*0.3, frameCount, frameCount/10);
  
  pop();
  var col3=color('#71CACA');
  var col4=color('#B258A2');
  stroke(lerpColor(col3,col4,frameCount/120));
}

// This is a piece of code to be placed after the draw(). This code “enables” the polygon() instruction
function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
