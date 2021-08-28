//Lesson 016 - Match Beginning String Patterns

let rickyAndCal = "Cal and Ricky both like racing.";
//let calRegex = /change/; // Change this line - This is how the line was oringially
let calRegex = /Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

console.log(result); // Will return true if correct
