function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);
}

function draw() {
  background(64, 58, 58);

  // Calculate color based on frame count
  let r = map(sin(frameCount * 0.02), -1, 1, 0, 255);
  let g = map(sin(frameCount * 0.03), -1, 1, 0, 255);
  let b = map(sin(frameCount * 0.04), -1, 1, 0, 255);

  // Apply color to the cube
  fill(r, g, b);
  stroke(120);
  translate(0, -76, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(120);
}
