function abs(x) {
  // if(x < 0) {
  //   return -x;
  // } else {
  //   return x;
  // }
  return x < 0 ? -x : x;
}

function test_abs() {
  console.log("abs of -5 is : " + abs(-5) );
  console.log("abs of 7 is : " + abs(7) );
  console.log("abs of 0 is : " + abs(0) );
  console.log("abs of -4567890 is : " + abs(-4567890) );
  console.log("abs of -3.145 is : " + abs(-3.145) );
  console.log("abs of 3.145 is : " + abs(3.145) );
}

//test_abs();{

function max(x,y) {
//   if(x > y){
//     return x;
//   } else {
//     return y;
//   }
  return (x > y) ? x : y ;
}


function testMax(){
  console.log("max of 3 and 6: " + max(3,6));
  console.log("max of -3 and -6: " + max(-3,-6));
  console.log("max of 6 and 6: " + max(6,6));
}

//testMax();

function min(x,y) {
  if(x < y){
    return x;
  } else {
    return y;
  }
}


function testMin(){
  console.log("min of 3 and 6: " + min(3,6));
  console.log("min of -3 and -6: " + min(-3,-6));
  console.log("min of 6 and 6: " + min(6,6));
}

//testMin();

function rolld20(){
  return Math.ceil(Math.random() * 20);
}

//rolld20();


function posOrNeg(x) {
  if(x < 0){
    console.log(x + " is negative");
  } else if (x > 0) {
    console.log(x + " is positive");
  } else {
    console.log(x + " is neither positive nor negative");
  }
}

function testPosOrNeg() {
  posOrNeg(-342);
  posOrNeg(467);
  posOrNeg(0);
}

//testPosOrNeg();

function monthName(month){
  switch (month) {
    case  1: return "January";
    case  2: return "February";
    case  3: return "March";
    case  4: return "April";
    case  5: return "May";
    case  6: return "June";
    case  7: return "July";
    case  8: return "August";
    case  9: return "September";
    case 10: return "October";
    case 11: return "November";
    case 12: return "December";
    default: return undefined;
  }
}


// console.log(monthName(1));
// console.log(monthName(2));
// console.log(monthName(3));
// console.log(monthName(4));
// console.log(monthName(5));
// console.log(monthName(6));
// console.log(monthName(7));
// console.log(monthName(8));
// console.log(monthName(9));
// console.log(monthName(10));
// console.log(monthName(11));
// console.log(monthName(12));



function largestFactor(n) {
  let factor = n - 1;
  while(n % factor !== 0){
    factor--;
  }
  return factor;
}



function alignRight(value, width) {
  let str = value;
  while (str.length < width){
    str = " " + str;
  }
  return str;
}

// console.log(alignRight("items", 12));
// console.log(alignRight("items", 12));
// console.log(alignRight("items", 12));
// console.log(alignRight("items", 12));
// console.log(alignRight("items", 12));
// console.log(alignRight("items", 12));
// console.log(alignRight("items", 12));
// console.log(alignRight("items", 12));
// console.log(alignRight("items", 12));
// console.log(alignRight("items", 12));

function printTheNumbers() {
  for(let i = 0; i < 19; i += 4){
    console.log(i);
  }
}

// printTheNumbers();

function factorial(n) {
  let result = 1;
  // for (let i = n; i > 0; i--) {
  //   result = result * i;
  // }
  let i = n;
  while (i > 0){
    result = result * i;
    i--;
  }
  return result;
}

// console.log("factorial of 5 is " + factorial(5));
// console.log("factorial of 3 is " + factorial(3));
// console.log("factorial of 76 is " + factorial(76));
// console.log("factorial of 170 is " + factorial(171));


function recursiveFactorial(n) {
  if (n <= 1){
    return 1;
  } else {
    return n * recursiveFactorial(n - 1);
  }
}

// console.log(recursiveFactorial(170));

function countDown(start) {
  for (let i = start; i >= 0; i--){
    console.log(i);
  }
  console.log("KABOOM!!!");
}
//countDown(10);

function countUP(start) {
  for (let i = start; i <= 10; i ++){
    for (let j = 1; j<= 10; j ++){
      for (let k = 1; k <= 10; k ++){
        for (let l =1; l <= 10; l ++){
          for (let m = 1; m <= 10; m ++){
            for (let n = 1; n <= 10; n ++){
              for (let o = 1; o <= 10; o ++){
                console.log(i * j * k * l * m * n * o);
              }
            }
          }
        }
      }
    }
  }
}
countUP(1);
