//Lesson 009 - Match Letters of the Alphabet

let quoteSample = "The quick brown fox jumps over the lazy dog.";
//let alphabetRegex = /change/; // Change this line - This is how the line was oringially
let alphabetRegex = /[a-z]/ig; // Change this line
//let result = alphabetRegex; // Change this line - This is how the line was oringially
let result = quoteSample.match(alphabetRegex); // Change this line

console.log(result); // console should show each letter of the string if correct