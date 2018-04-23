// function isEven(n) {
//   return n % 2 === 0;
// }
//
// function isOdd(n) {
//   return n % 2 !== 0;
// }
//
// for (let i = 1; i <= 100; i ++){
//   if( isOdd(i) ){
//     console.log(i);
//   }
// }

// console.log(isOdd(3));


function isLeapYear(year) {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

console.log(isLeapYear(2025));
