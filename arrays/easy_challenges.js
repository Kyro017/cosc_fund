let numbers = [42, 21, 27, 42, 13, 42, 87, 1e6, 0.5];


function firstLast6(arr) {
  return arr[0] === 6 || arr[arr.length - 1] === 6;
}

// console.log(firstLast6([1,2,3])); // False
// console.log(firstLast6([7,3,5])); // False
// console.log(firstLast6([1,4,6])); // True
// console.log(firstLast6([6,2,9])); // True
// console.log(firstLast6([6,2,9,5,4])); // True
// console.log(firstLast6([3,2,9,5,6])); // True

function sumOld(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}


function sum(arr) {
  let total = 0;
  arr.forEach((num) => total += num);
  return total;
}

// console.log(sum([1,2,3])); // 6
// console.log(sum([3,2,4])); // 9
// console.log(sum([5,2,6])); // 13

function minOld(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < smallest) smallest = arr[i];
  }
  return smallest;
}


function min(arr) {
  let smallest = Infinity;
  arr.forEach((num) => {
    if(num < smallest) smallest = num;
  });
  return smallest;
}


function maxOld(arr) {
  let biggest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > biggest) biggest = arr[i];
  }
  return biggest;
}

function max(arr) {
  let biggest = -Infinity;
  arr.forEach((num) => {
    if(num > biggest) biggest = num;
  });
  return biggest;
}

// console.log(min(numbers));
// console.log(max(numbers));


function swapFirstLast(arr) {
  let first = arr[0];
  let last = arr[arr.length - 1];
  arr[0] = last;
  arr[arr.length - 1] = first;
}

// let arr = [1,2,3,4,5,6];
// swapFirstLast(arr);
// console.log(arr);
