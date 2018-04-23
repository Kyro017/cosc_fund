function alignRight(value, width) {
  let str = "" + value;
  while (str.length < width) {
    str = " " + str;
  }
  return str;
}

const TABLE_SIZE = 100;
const FIELD_WIDTH = 20;


function multiplecationTable() {
  for(let i = 1; i <= TABLE_SIZE; i ++){
    let line = "";
    for(let j = 1; j <= TABLE_SIZE; j ++){
      line += alignRight(i * j, FIELD_WIDTH);
    }
    console.log(line);
  }
}

//multiplecationTable();


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
//countUP(1);

const SIZE = 50;

function checkerBoard() {
  for(let i = 0; i < SIZE; i ++){
    let line = "";
    for(let j = 0; j < SIZE; j ++){
      line += ((j + i) % 2 === 0) ? "#" : " ";
    }
    console.log(line);
  }
}
// checkerBoard();

function drawTriangle(size) {
  for(let i = 1; i <= size; i++){
    let line = "";
    for(let j = 0; j < i; j++){
      line += "#";
    }
    console.log(line);
  }
}

// drawTriangle(199);

function gcd(x, y) {
  let r = x % y;
  while (r !== 0){
    x = y;
    y = r;
    r = x % y;
  }
  return y;
}

// console.log("gcd of 49 and 35 is " + gcd(49, 35));
// console.log("gcd of 12 and 3 is " + gcd(12, 3));
// console.log("gcd of no and no is " + gcd(93840274036230473984623902374093734027304739037490387304, 9826738927393740378498384049403893034849478490484));


function notString(str) {
  if (str[0] === "n" && str[1] === "o" && str[2] === "t"){
    return str;
  } else {
    return "not " + str;
  }
}

// console.log(notString("candy"));
// console.log(notString("not bad"));
// console.log(notString("x"));


function reverseString(str) {
  let reverse = "";
  for(let i = str.length - 1; i >= 0; i --) {
    reverse += str[i];
  }
  return reverse;
}

console.log(reverseString("candy"));
console.log(reverseString("Landon"));
