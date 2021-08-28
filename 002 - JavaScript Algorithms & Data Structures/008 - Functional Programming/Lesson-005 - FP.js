//Lesson 005 - Pass Arguments to Avoid External Dependence in a Function

// The global variable
var fixedValue = 4;

// Only change code below this line
function incrementer (value) {
  return value + 1;

  // Only change code above this line
}

someVal = incrementer(fixedValue);
console.log("fixedValue = " + fixedValue);
console.log("someVal = " + someVal);
console.log("After incrementer func run fixedValue = " + fixedValue);
