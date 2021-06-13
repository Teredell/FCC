//Lesson 018 - Match All Letters and Numbers

let quoteSample = "The five boxing wizards jump quickly.";
//let alphabetRegexV2 = /change/; // Change this line - This is how the line was oringially
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

console.log(result); // Console will count the characters in the string that match all characters as defined by \w