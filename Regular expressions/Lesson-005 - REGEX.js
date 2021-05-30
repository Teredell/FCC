//Lesson 005 - Extract Matches

let extractStr = "Extract the word 'coding' from this string.";
//let codingRegex = /change/; // Change this line - This is how the line was oringially
let codingRegex = /coding/; // This is the answer
//let result = extractStr; // Change this line - This is how the line was oringially
let result = extractStr.match(codingRegex); // This is the answer

console.log(result); // console should show the string "coding" if correct.

//Below is other testing for understanding
let someVar = "Some new REGEX I want to test out".match(/new/);
console.log(someVar);

let someVarNew = /new/.test("Some new REGEX I want to test out");
console.log(someVarNew);