//Lesson 008 - Set Default Parameters for Your Functions

// Only change code below this line
//const increment = (number, value) => number + value; //Before changes
const increment = (number, value = 1) => number + value; //Corrected
// Only change code above this line

console.log(increment(16, 4)); //increments by 4
console.log(increment(16)); //value is defaulted to increment by 1