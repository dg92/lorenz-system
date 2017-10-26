var x;
var y;
var z;

var sigma;
var beta;
var gama;

var vectorHistory;
function setup() {
  createCanvas(800, 600);
  colorMode(HSB);
  x = 0.01;
  y = 0;
  z = 0;
  sigma = 10;
  beta = 8/3;
  gama = 28;
  vectorHistory = [];

}

function draw() {
  background(0);
  let dt = 0.01;
  dx = (sigma * (y-x))*dt;
  dy = (x * (gama - z) - y)*dt;
  dz = (x*y - beta*z)*dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;
  vectorHistory.push(createVector([x], [y], [z]));
  translate(width/2, height/2);
  scale(5);
  stroke(255);
  beginShape();
  let hu = 0;
  for (var i = 0; i < vectorHistory.length; i++) {
    stroke(hu, 255, 255);
    point(vectorHistory[i].x, vectorHistory[i].y,vectorHistory[i].z);
    hu += 0.1;
    if (hu > 255) {
     hu = 0;
    }
  }
  endShape();
}
