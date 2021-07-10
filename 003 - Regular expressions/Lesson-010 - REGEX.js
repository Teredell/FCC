//Lesson 010 - Match Numbers and Letters of the Alphabet

let quoteSample = "Blueberry 3.141592653s are delicious.";
//let myRegex = /change/; // Change this line - This is how the line was oringially
let myRegex = /[h-s2-6]/ig; // Change this line
//let result = myRegex; // Change this line - This is how the line was oringially
let result = quoteSample.match(myRegex); // Change this line

console.log(result); //console will display all letters between h & s and numbers between 2 & 6 inclusive if correct.