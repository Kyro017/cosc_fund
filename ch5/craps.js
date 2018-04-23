// /* global randomInteger */
//
// function craps() {
//   let total = roll2d6();
//   if (total === 2 || total === 3 || total === 12){
//     console.log("YOU SUCK!!");
//   } else if (total === 7 || total ===11) {
//     console.log("YOU'RE A WINNER... AMAZING!!");
//   } else{
//     console.log(`This is your score ${total}.`);
//     let running = true;
//
//     while (running) {
//       let secondRoll = roll2d6();
//       if (secondRoll === total){
//         console.log("YOU'RE A WINNER!!");
//         running = false;
//       }else if (secondRoll === 7) {
//         console.log("YOU GOT A 7, YOU LOSE!");
//         running = false;
//       }
//     }
//   }
// }
//
//
// function roll2d6() {
//   let dice1 = randomInteger(1,6);
//   let dice2 = randomInteger(1,6);
//   let total = dice1 + dice2;
//   console.log(`Rolling dice: ${dice1} + ${dice2} = ${total}`);
//   return total;
// }
