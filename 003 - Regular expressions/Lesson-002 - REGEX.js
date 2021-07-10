// Lesson 002 - Match Literal Strings

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
//let waldoRegex = /search/; // Change this line - This is how the line was oringially
let waldoRegex = /Waldo/; // This is the answer
let result = waldoRegex.test(waldoIsHiding);

console.log(result); //if above worked console should show True.