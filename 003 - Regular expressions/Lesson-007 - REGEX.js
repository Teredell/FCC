//Lesson 007 - Match Anything with Wildcard Period

let exampleStr = "Let's have fun with regular expressions!";
//let unRegex = /change/; // Change this line - This is how the line was oringially
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

console.log(result); // console should display true if correct
