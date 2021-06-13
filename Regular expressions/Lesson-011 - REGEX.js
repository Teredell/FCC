//Lesson 011 - Match Single Characters Not Specified

let quoteSample = "3 blind mice.";
//let myRegex = /change/; // Change this line - This is how the line was oringially
let myRegex = /[^aeiou0-9]/ig; // Change this line
//let result = myRegex; // Change this line - This is how the line was oringially
let result = quoteSample.match(myRegex); // Change this line

console.log(result); //Console will display all consonants & non numerical characters if correct.
