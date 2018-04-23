function sumOddInt(n) {
  let sum = 0;
  for(let i = 0; i < n; i ++){
    sum += (2 * i) + 1;
  }
  return sum;
}

console.log(sumOddInt(20));
