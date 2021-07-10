//Lesson 007 - Catch Use of Assignment Operator Instead of Equality Operator

let x = 7;
let y = 9;
let result = "to come";

//if(x = y) { - before change
if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}
console.log(result); //Will display Not Equal! as the 2 are now being compared not assigned.
