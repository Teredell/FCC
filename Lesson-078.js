//Lesson 78 - Return Early Pattern for FunctionsPassed

// Setup
function abTest(a, b) {
  // Only change code below this line
  if(a < 0 || b < 0){
    return undefined;
  }
  // Only change code above this line
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2,2));

console.log(abTest(2,-1));

console.log(abTest(-1,2));