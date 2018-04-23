function frontBack(str) {
  return str[str.length -1]+ str.slice(1,-1) + str[0];
}


// console.log(frontBack("this"));
// console.log(frontBack("code"));
// console.log(frontBack("Array"));
// console.log(frontBack("Landon"));
// console.log(frontBack("shit"));


function front3(str, repeats) {
  return str.slice(0,3).repeat(repeats);
}


// console.log(front3("Landon", 3));
// console.log(front3("ay", 1));
// console.log(front3("lol", 88 ));


function back3(str) {
  return str.slice(-3).repeat(3);
}

// console.log(back3("Landon" ));
// console.log(back3("Array"));
// console.log(back3("Boom"));

function backAround(str) {
  return str.slice(-1) + str + str.slice(-1);
}

// console.log(backAround("cat"));
// console.log(backAround("flair"));
// console.log(backAround("sit"));


function makeAbba(strA, strB) {
  return strA + strB + strB + strA;
}


// console.log(makeAbba("cat", "dog"));
// console.log(makeAbba("charge", "blade"));
// console.log(makeAbba("switch", "axe"));

function makeTags(tag, word) {
  // return "<" + tag + ">" + word + "</" + tag  + ">";
  return `<${tag}>${word}</${tag}>`;
}

// console.log(makeTags("i", "Yay"));
// console.log(makeTags("div", "Tis I Bitch!"));
// console.log(makeTags("div", makeTags("i", "Tis I Bitch!")));


function makeOutWord(out, word) {
  // return out.slice(0,2) + word + out.slice(2);
  return `${out.slice(0,2)}${word}${out.slice(-2)}`;
}

// console.log(makeOutWord("<<>>", "fox" ));
// console.log(makeOutWord("[[]]", "Vax" ));
// console.log(makeOutWord("<<>>", "Vex" ));
// console.log(makeOutWord("xXXx", "Quill" ));

function withoutEnds(str){
  return str.slice(1,-1);
}

// console.log(withoutEnds("Array"));
// console.log(withoutEnds("foo fighters"));
// console.log(withoutEnds("Iron Maiden"));


function swapHalves(str) {
  if(str.length % 2 === 0){
    return `${str.slice(-3)}${str.slice(0,3)}`;
  } else {
    return `${str.slice(-3)}${str.slice(3,4)}${str.slice(0,3)}`;
  }
}

// console.log(swapHalves("brownie"));
// console.log(swapHalves("coding"));

function header(msg) {
  console.log("\n" + '='.repeat(15) + "\n" + msg + "\n" + '='.repeat(15));
}


/* Given 2 strings, a and b, return a string of the form short+long+short,
with the shorter string on the outside and the longer string on the inside.
The strings will not be the same length, but they may be empty (length 0). */

function comboString(a, b) {
  if(a.length > b.length){
    return `${b}${a}${b}`;
  } else {
    return `${a}${b}${a}`;
  }
}

// header('comboString');
// console.log(comboString("Hello", "hi")); // "hiHellohi"
// console.log(comboString("hi", "Hello")); // "hiHellohi"
// console.log(comboString("aaa", "b")); // "baaab"
// console.log(comboString("sup", "dude")); // "supdudesup"
// console.log(comboString("test", "case")); // "testcasetest"


/* Given 2 strings, return their concatenation, except omit the first char
of each. The strings will be at least length 1. */

function nonStart(a, b) {
  return `${a.slice(1)}${b.slice(1)}`;
}

// header('nonStart');
// console.log(nonStart("Hello", "There")); // "ellohere"
// console.log(nonStart("java", "code")); // "avaode"
// console.log(nonStart("shotl", "java")); // "hotlava"
// console.log(nonStart("HElla", "adan")); // "Elladan"
// console.log(nonStart("edi", "node")); // "diode"

/*
Given a string, return a "rotated left 2" version where the first 2 chars are
moved to the end. The string length will be at least 2. */

function rotateLeft2(str) {
  let i = 0;
  while(i < str.length){
    return `${str.slice(2)}${str.slice(0,2)}`;
  }
}

// header('rotateLeft2');
// console.log(rotateLeft2("Hello")); // "lloHe"
// console.log(rotateLeft2("java")); // "vaja"
// console.log(rotateLeft2("Hi")); // "Hi"
// console.log(rotateLeft2("Link")); // "nkLi"
// console.log(rotateLeft2("Bacon")); // "conBa"

/*
Given a string, return a "rotated right 2" version where the last 2 chars are
moved to the start. The string length will be at least 2. */

function rotateRight2(str) {
  let i = 0;
  if(i < str.length && str.length > 4){
    return `${str.slice(-2)}${str.slice(0,3)}`;
  } else {
    if(str.length < 5 && str.length > 3){
      return `${str.slice(-2)}${str.slice(0,2)}`;
    }
  }
  if ( i < 3){
    return `${str.slice(-2)}${str.slice(3)}`;
  }
}

// header('rotateRight2');
// console.log(rotateRight2("Hello")); // "loHel"
// console.log(rotateRight2("java")); // "vaja"
// console.log(rotateRight2("Hi")); // "Hi"
// console.log(rotateRight2("Quill")); // "llQui"
// console.log(rotateRight2("Toast")); // "stToa"


/* Given a string, return a string length 1 from its front, unless front is false, in which case return a string length 1 from its back. The string will be non-empty. */
function theEnd(str, front) {
  // if (front === true){
  //   return `${str.slice(0,1)}`;
  // } else {
  //   return `${str.slice(-1)}`;
  // }
  return front === true ? `${str.slice(0,1)}` : `${str.slice(-1)}`;
}

header('theEnd');
// console.log(theEnd("Hello", true)); // "H"
// console.log(theEnd("Hello", false)); // "o"
// console.log(theEnd("oh", true)); // "o"
// console.log(theEnd("HeHe", false)); // "e"
// console.log(theEnd("Funny", true)); // "F"
// console.log(theEnd("Happy", false)); // "y"
