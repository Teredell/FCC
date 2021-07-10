// Lesson 004 - Ignore Case While Matching

let myString = "freeCodeCamp";
//let fccRegex = /change/; // Change this line - This is how the line was oringially
let fccRegex = /freecodecamp/i; // This is the answer
let result = fccRegex.test(myString);

console.log(result); //if above worked console should show True.