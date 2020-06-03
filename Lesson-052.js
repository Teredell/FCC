//Lesson-052 - Understanding Undefined Value returned from a Function

// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum += 5;
}

// Only change code above this line

addThree();
addFive();

console.log(sum);

console.log(addFive());

console.log(sum);