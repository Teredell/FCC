//Lesson 019 - Match Everything But Letters and Numbers

//Quick note - using capitalized W as opposed to lower case w in last exercise

let quoteSample = "The five boxing wizards jump quickly.";
//let nonAlphabetRegex = /change/; // Change this line - This is how the line was oringially
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

console.log(result);// Console will count the characters in the string that match all characters as defined by \W 
