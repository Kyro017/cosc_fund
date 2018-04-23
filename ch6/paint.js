/* global  GWindow, GOval, GLine, randomColor, GRect, */


// CONSTANTS
const GW_WIDTH = 500;
const GW_HEIGHT = 300;
const DOT_SIZE = 6;
const N_STEPS = 100;
const TIME_STEPS = 20;
const SQUARE_SIZE = 50;

// MAIN PROGRAM
function drawDots() {
  let gw = GWindow(GW_WIDTH, GW_HEIGHT);

  function clickAction(e) {
    let dot = GOval(e.getX() - DOT_SIZE / 2, e.getY() - DOT_SIZE / 2, DOT_SIZE);
    dot.setFilled(true);
    gw.add(dot);
  }

  gw.addEventListener("click", clickAction);
}


function drawLines() {
  let gw = GWindow(GW_WIDTH, GW_HEIGHT);
  let line = null;

  function mouseDownAction(e) {
    line = GLine(e.getX(), e.getY(), e.getX(), e.getY());
    line.setColor(randomColor());
    gw.add(line);
  }
  function dragAction(e) {
    line.setEndPoint(e.getX(), e.getY());
  }

  gw.addEventListener("mousedown", mouseDownAction);
  gw.addEventListener("drag", dragAction);
}



function animatedSquare() {
  let gw = GWindow(GW_WIDTH, GW_HEIGHT);
  let dx = (gw.getWidth() - SQUARE_SIZE) / N_STEPS;
  let dy = (gw.getHeight() - SQUARE_SIZE) / N_STEPS;
  let square = GRect(0, 0, SQUARE_SIZE, SQUARE_SIZE);
  square.setFilled(true);
  gw.add(square);
  let stepCount = 0;

  function step() {
    square.move(dx, dy);
    stepCount++;
    if(stepCount % N_STEPS === 0) square.setLocation(0, 0);
  }

  let timer = setInterval(step, TIME_STEPS);
}
