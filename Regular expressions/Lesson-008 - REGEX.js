//Lesson 008 - Match Single Character with Multiple Possibilities

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
//let vowelRegex = /change/; // Change this line - This is how the line was oringially
let vowelRegex = /[aeiou]/ig; // Change this line
//let result = vowelRegex; // Change this line - This is how the line was oringially
let result = quoteSample.match(vowelRegex); // Change this line

console.log(result); // console should display 25 vowels if correct