//Lesson 012 - Match Characters that Occur One or More TimesPassed

let difficultSpelling = "Mississippi";
//let myRegex = /change/; // Change this line - This is how the line was oringially
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

console.log(result); // Console will display "ss ss" if correct