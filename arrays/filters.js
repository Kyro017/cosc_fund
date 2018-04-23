function onlyEvensOld(arr) {
  // start with an empty array
  let newArr = [];
  arr.forEach((num) => {
    // check if num is even
    if(num % 2 === 0){
      newArr.push(num);
    }
  });
  return newArr;
}


function onlyEvens(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(onlyEvens([1,2,3,4,5,6,7,8,9,10]));


function onlyOddsOld(arr) {
  // start with an empty array
  let newArr = [];
  arr.forEach((num) => {
    // check if num is odd
    if(num % 2 === 1){
      newArr.push(num);
    }
  });
  return newArr;
}



function onlyOdds(arr) {
  return arr.filter((num) => num % 2 === 1);
}

console.log(onlyOdds([1,2,3,4,5,6,7,8,9,10]));

function lessThanFiveOld(arr) {
  // start with an empty array
  let newArr = [];
  arr.forEach((num) => {
    // check if num is even
    if(num < 5){
      newArr.push(num);
    }
  });
  return newArr;
}


function lessThanFive(arr) {
  return arr.filter((num) => num < 5);
}

console.log(lessThanFive([1,2,3,4,5,6,7,8,9,10]));
