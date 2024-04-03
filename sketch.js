function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);

}

function draw() {
  background(64, 58, 58);

  normalMaterial();
  push();
  fill(255)
  stroke(120)
  translate(0, -76, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(125);
  pop();

}