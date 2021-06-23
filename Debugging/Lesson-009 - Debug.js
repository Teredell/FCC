//Lesson 009 - Catch Arguments Passed in the Wrong Order When Calling a Function

function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
//let power = raiseToPower(exp, base); //Before correction
let power = raiseToPower(base, exp);  //After
console.log(power); // Should display 8 if correct
