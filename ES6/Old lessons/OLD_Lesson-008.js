//Lesson 8 - Set Default Parameters for Your Functions

// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line

console.log(increment(5, 4));
console.log(increment(5));


const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); 
console.log(greeting()); 
