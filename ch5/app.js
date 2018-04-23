// /* global randomStudent, randomRockPaperScissors, randomReal */
//
// console.log("EPIC DEATH MATCH OF ROCK, PAPER, SCISSORS!!!!!!");
// let student1 = randomStudent();
// console.log("In the red corner is " + student1 + "!!");
// let student2 = randomStudent();
// while (student1 === student2) {
//   student2 = randomStudent();
// }
// console.log("In the blue corner is " + student2 + "!!");
// console.log("LLLLLLLLLLLETS GET READY TO RUMBLLLLLLLLLLLEEE!!!!!!");
// console.log("ROUND 1............FIGHT!!!!!!");
//
// /* Pick rock, paper, or scissors. */
// let choice1 = randomRockPaperScissors();
// let choice2 = randomRockPaperScissors();
// console.log(`${student1} chose ${choice1}`);
// console.log(`${student2} chose ${choice2}`);
// /*If the choices are the same ... try again! */
// while (choice1 === choice2) {
//   console.log("DRAW!!!!!!!");
//   console.log("NEXT ROUND........FIGHT!!!!!!");
//   choice1 = randomRockPaperScissors();
//   choice2 = randomRockPaperScissors();
//   console.log(`${student1} chose ${choice1}`);
//   console.log(`${student2} chose ${choice2}`);
// }
// /* Now we know the two students have different choices
// So let's figure out who won! */
// let winner;
// if (choice1 === "Rock") {
//   winner = choice2 === "Paper" ? student2 : student1;
// } else if (choice1 === "Paper") {
//   winner = choice2 === "Scissors" ? student2 : student1;
// } else {
//   winner = choice2 === "Rock" ? student2 : student1;
// }
//
// console.log("This Game's winner is....... " + winner + "!!!!!!!");


/* global GWindow, GOval, randomReal, randomColor  */
const WIDTH = 500;
const HEIGHT = 300;
const NUM_CICLES = 15;
const MIN_RADIUS = 15;
const MAX_RADIUS = 50;

function randomCircles() {
  let gw = GWindow(WIDTH ,HEIGHT);
  for (let i = 0; i < NUM_CICLES; i++) {
    gw.add(createRandomCircles());
  }
}


function createRandomCircles() {
  let r = randomReal(MIN_RADIUS, MAX_RADIUS);
  let x = randomReal(r, WIDTH - r);
  let y = randomReal(r, HEIGHT - r);
  let circle = GOval(x-r, y-r, 2 * r, 2 * r);
  circle.setFilled(true);
  circle.setColor(randomColor());
  return circle;
}
