function timesTen(arr) {
  return arr.map((num) => num * 10);
}


console.log(timesTen([1,2,3]));


function addFive(arr) {
  return arr.map((num) => num + 5);
}

console.log(addFive([1,2,3]));


function divideTwo(arr) {
  return arr.map((num) => num / 2);

}

console.log(divideTwo([138,42,56]));


function allEven(arr) {
  return arr.every((num) => num % 2 === 0);
}

console.log(allEven([1,2,3,4,5,6,7,8,9,10]));
