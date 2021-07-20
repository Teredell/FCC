//Lesson 004 - Avoid Mutations and Side Effects Using Functional Programming

// The global variable
var fixedValue = 4;

function incrementer () {
  // Only change code below this line
  return fixedValue +1;
  // Only change code above this line
}
someVal = incrementer();
console.log("fixedValue = " + fixedValue);
console.log("someVal = " + someVal);
console.log("After incrementer func run fixedValue = " + fixedValue);
