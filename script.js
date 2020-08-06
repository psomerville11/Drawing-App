/* global createCanvas, colorMode, HSB, strokeWeight, background, rect, mouseX,
mouseY, stroke, fill, keyCode, UP_ARROW, mouseIsPressed, line, pmouseX, pmouseY,
width, arc, HALF_PI, TWO_PI */

let brushHue

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  strokeWeight(6);
  background(150);
  
  
  for (let i = 0; i < 360; i++) {
    stroke(i, 50, 80);
    fill(i, 50, 80);
    rect(i*width/360, 0, width / 360, 20);
  }
  
  
  /*let fullCircle = TWO_PI-0.0000001;
  let prevI = 0;
  for (let i = 0; i < fullCircle; i+= fullCircle/360) {
    stroke(brushHue, 50, 80);
    fill(brushHue, 50, 80); 
  
    arc(50, 55, 50, 50, prevI, i);
    brushHue++;
    prevI = i
  }
  */
}

function mousePressed() {
  if (mouseY < 20) {
    brushHue = mouseX * width/360;
    stroke(brushHue, 50, 80);
    fill(brushHue, 50, 80); 
  }
}

function draw() {
  // background(95);
  //chooseColors();
  
  
  if (mouseIsPressed && mouseY > 20) {
    //rect(mouseX, mouseY, 15, 15);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function chooseColors() {
  brushHue += 1;
  if (brushHue > 360) {
    brushHue = 0
  }
  stroke(brushHue, 50, 80);
  fill(brushHue, 50, 80);
}

function keyPressed() {
  // keycode.info
  if (keyCode == UP_ARROW) { // DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW
    background(95);
  } else if (keyCode == 32) {
    background(95);
  }
}
