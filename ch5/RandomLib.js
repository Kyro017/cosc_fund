/*
 * File: RandomLib.js
 * ------------------
 * This file contains a simple library of functions to generate random integers,
 * real, booleans, colors, and students!
 */

/* Returns a random integer in the range low to high, inclusive. */
function randomInteger(low, high) {
  return low + Math.floor((high - low + 1) * Math.random());
}

/* Returns a random real in the range low to high, inclusive. */
function randomReal(low, high) {
  return low + (high - low) * Math.random();
}

/* Returns either true or false based on a percent. */
function randomChance(p) {
  if(p === undefined) p = 0.5;
  return Math.random() < p;
}

/* Returns a random item from  an array. */
function randomItem(arr) {
  return arr[randomInteger(0, arr.length - 1)];
}

/* Returns a random student from the names in the array. */
function randomStudent() {
  let students = ['Tom', 'Michelle', 'Ryan', 'Landon', 'Quinn', 'Alex', 'Jesse', 'Cami', 'Mark'];
  return randomItem(students);
}

/* Returns Rock, Paper, or Scissor. */
function randomRockPaperScissors() {
  let arr = ['Rock', 'Paper', 'Scissors'];
  return randomItem(arr);
}


function randomColor() {
  let str = "#";
  for (let i = 0; i < 6; i++) {
    let digit = randomInteger(0, 15);
    switch (digit) {
      case 0: case 1: case 2: case 3: case 4:
      case 5: case 6: case 7: case 8: case 9: str += digit; break;
      case 10: str += "A"; break;
      case 11: str += "B"; break;
      case 12: str += "C"; break;
      case 13: str += "D"; break;
      case 14: str += "E"; break;
      case 15: str += "F"; break;
    }
  }
  return str;
}
