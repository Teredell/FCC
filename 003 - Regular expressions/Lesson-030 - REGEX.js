//Lesson 030 - Check For Mixed Grouping of Characters

let myString = "Eleanor Roosevelt";
//let myRegex = /False/; // Change this line - This is how the line was originally
let myRegex = /(Eleanor|Franklin).*Roosevelt/; // Change this line
//let result = false; // Change this line - This is how the line was originally
let result = myRegex.test(myString);; // Change this line
// After passing the challenge experiment with myString and see how the grouping works

console.log(result); // Will return true or false based on the term above with option for middle name