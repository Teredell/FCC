//Lesson 017 - Match Ending String Patterns

let caboose = "The last car on a train is the caboose";
//let lastRegex = /change/; // Change this line - This is how the line was oringially
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

console.log(result);// will return true if correct
