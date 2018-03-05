/* global GWindow, GLabel, GOval, GRect, GLine */

function helloWorld() {
  console.log("Hello, World!");
}

const GWIDTH = 800;
const  GHEIGHT = 300;

function graphicsHelloWorld() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  let msg = GLabel("od ah ving", 50, 100);
  let msg2 = GLabel("dur neh viir", 50, 150);
  let msg3 = GLabel("a b c d e f g h i j k l m n o p q r s t u v w x y z", 50, 185);
  msg.setFont("25px 'Dovahkiin'");
  msg.setColor("#445588");
  msg2.setFont("25px 'Dovahkiin'");
  msg2.setColor("#553399");
  msg3.setFont("17px 'Dovahkiin'");
  msg3.setColor("black");
  gw.add(msg);
  gw.add(msg2);
  gw.add(msg3);
}

function blueRectangle() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  let rect = GRect(150, 50, 200, 100);
  rect.setColor("darkviolet");
  rect.setFilled(true);
  gw.add(rect);

  let oval = GOval(150, 50, 200, 100);
  oval.setColor("lightblue");
  oval.setFilled(true);
  gw.add(oval);
}

function drawDiagonals() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  gw.add(GLine(0, 0, GWIDTH, GHEIGHT));
  gw.add(GLine(0, GHEIGHT, GWIDTH, 0));
}

function target() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  let xc = GWIDTH / 2;
  let yc = GHEIGHT / 2;
  gw.add(createFilledCircle(xc, 350, 1000, "cyan"));
  gw.add(createFilledCircle(xc, 350, 325, "red"));
  gw.add(createFilledCircle(xc, 350, 300, "orange"));
  gw.add(createFilledCircle(xc, 350, 275, "yellow"));
  gw.add(createFilledCircle(xc, 350, 250, "green"));
  gw.add(createFilledCircle(xc, 350, 225, "blue"));
  gw.add(createFilledCircle(xc, 350, 200, "purple"));
  gw.add(createFilledCircle(xc, 350, 175, "violet"));
  gw.add(createFilledCircle(xc, 350, 150, "cyan"));

}

function createFilledCircle(x, y, r, color) {
  let circle = GOval(x - r, y - r, r * 2, r * 2);
  circle.setFilled(true);
  circle.setColor(color);
  return circle;
}
