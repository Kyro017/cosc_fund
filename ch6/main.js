let foo = function(x) {
  return x * x - 5;
};

let bar = function(x) {
  return x * x * x;
};

function printFunctionTable(f, min, max) {
  for(let i = min; i <= max; i++) {
    console.log(`${f.name}(${i}) -> ${f(i)}`);
  }
}

printFunctionTable(foo, -15, 15);
console.log('-----------------------');
printFunctionTable(bar, -15, 15);
console.log('-----------------------');
printFunctionTable(Math.sqrt, 0, 15);
