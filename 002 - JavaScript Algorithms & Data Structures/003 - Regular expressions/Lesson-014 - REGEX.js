//Lesson 014 - Find Characters with Lazy Matching

let text = "<h1>Winter is coming</h1>";
//let myRegex = /<.*>/; // Change this line - This is how the line was oringially
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

console.log(result);