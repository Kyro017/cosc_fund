function max3(x,y,z) {
  if (x > y){
    return x;
  } else {
    if (y > z){
      return y;
    } else{
      if (z > x){
        return z;
      }
    }
  }
}

// console.log(max3(145, 937, 83)); // 937
// console.log(max3(837, 82, 736)); // 837
// console.log(max3(8252, 726218, 735637)); // 735637
// console.log(max3(-715, -24, -827)); // -24
// console.log(max3(12, 32, 25)); //32
// console.log(max3(838404758, 8363826, 72538)); //32



// function missingChar(//str, pos) {
//   // let newStr = "";
//   // for(let i = 0; i < str.length; i++){
//   //   if(i !== pos){
//   //     newStr += str[i];
//   //   }
//   // }
//   // return newStr;
//   let str1 = str.slice(0, pos);
//   let str2 = str.slice(pos+1);
//   return str1 + str2;
// }

// console.log(missingChar("This", 1)); // hose
// console.log(missingChar("HI", 0)); // hrse
// console.log(missingChar("birtch", 2)); // oats


function front3Upper(str) {
  let string = str.slice(0,3);
  let string1 = string.toUpperCase();
  let string2 = str.slice(3);
  return string1 + string2;
}

// console.log(front3Upper("Wyoming"));
// console.log(front3Upper("The Array School"));
// console.log(front3Upper("up"));

function bottles(n) {
  if (n !== 1){
    return n + " bottles";
  }
  return "1 bottle";
}


// for (let i = 99; i > 0; i --){
//   console.log(bottles(i) + " of beer on the wall");
//   console.log(bottles(i) + " of beer");
//   console.log("you take one down, pass it around");
//   console.log(bottles(i - 1) + " of beer on the wall.\n");
// }
//




// function oddInt(n) {
//   for(let i)
// }

// console.log(oddInt(4));


function drawArrow(size) {
  for(let i = 1; i <= size; i++){
    let line = "";
    for(let j = 0; j < i; j++){
      line += "*";
    }
    console.log(line);
    for(let k = line; k > 0; k --){
      line -= "*";
    }
  }
}

drawArrow(7)
