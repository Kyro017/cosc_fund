function header(msg) {
  // console.log(`\n${'='.repeat(20)}\n${msg}\n${'='.repeat(20)}`);
  // OR!!!!
  console.log("\n====================\n" + msg + "\n====================");
}

function twoVarTruthTable(func) {
  header(func.name);
  console.log("TT: " + func(true, true)); // TRUE
  console.log("TF: " + func(true, false)); // FALSE
  console.log("FT: " + func(false, true)); // TRUE
  console.log("FF: " + func(false, false)); // TRUE
}

function sleepIn(weekday, vacation){
  return !weekday || vacation;
}

function monkeyTrouble(aSmile, bSmile) {
  return aSmile === bSmile;
}

// twoVarTruthTable(monkeyTrouble);

function challenge3(x, y) {
  return x || !y
}

// twoVarTruthTable(challenge3);

//function sumDouble(x, y) {
  // if (x !== y){
  //   return x + y;
  // } else {
  //   return x * 2 + y * 2;
  // }
  //return (x !== y) ? x + y : x * 2 + y * 2;
//}


function diff21(n) {
  if (n > 21 ){
    return (Math.abs((n) - 21)) * 2;
  } else {
    return Math.abs((n) - 21);
  }
}

// console.log("diff21 of 19 is " + diff21(19));
// console.log("diff21 of 10 is " + diff21(10));
// console.log("diff21 of 21 is " + diff21(21));
// console.log("diff21 of 25 is " + diff21(25));

function parrotTrouble(talking , hour) {
  return ( talking && (hour < 7 || hour > 20));
}


// header('parrotTrouble')
// console.log(parrotTrouble(true, 6));
// console.log(parrotTrouble(true, 7));
// console.log(parrotTrouble(false, 6));
// console.log(parrotTrouble(true, 21));
// console.log(parrotTrouble(false, 21));
// console.log(parrotTrouble(false, 20));
// console.log(parrotTrouble(true, 23));


function makes10(a, b) {
  return (a === 10 || b === 10) || (a + b === 10);
}

// header('makes10')
// console.log(makes10(9, 10));
// console.log(makes10(9, 9));
// console.log(makes10(1, 9));
// console.log(makes10(10, 1));
// console.log(makes10(10, 10));
// console.log(makes10(3, 8));


/* Given an int n, return true if it is within 10 of 100 or 200.
Note: Math.abs(num) computes the absolute value of a number. */
function within10(n, target) {
  return (Math.abs(target - n) <= 10);
}

function nearHundred(n) {
  return within10(n, 100) || within10(n, 200);
}



// header('makes10')
// console.log(nearHundred(93)); //true
// console.log(nearHundred(90)); //true
// console.log(nearHundred(89)); //false
// console.log(nearHundred(110)); //true
// console.log(nearHundred(111)); //false
// console.log(nearHundred(121)); //false
// console.log(nearHundred(191)); //true


/* Given 2 int values, return true if one is negative and one is positive.
Except if the parameter "negative" is true, then return true only if both
are negative. */
function posNeg(a, b, negative) {
//  return (!negative && (a < 0 && b > 0 || a > 0 && b < 0)) || (negative && a < 0 && b < 0);
  if (negative){
    return a < 0 && b < 0;
  } else {
    return (a < 0 && b > 0 || a > 0 && b < 0);
  }
}

// header('posNeg');
// console.log(posNeg(1, -1, false)); //true
// console.log(posNeg(-1, 1, false)); //true
// console.log(posNeg(-4, -5, true)); //true
// console.log(posNeg(-4, -5, false)); //false
// console.log(posNeg(-4, 5, false)); //true
// console.log(posNeg(-4, 5, true)); //false
// console.log(posNeg(1, 1, false)); //false
// console.log(posNeg(9, -18, true)); //false
