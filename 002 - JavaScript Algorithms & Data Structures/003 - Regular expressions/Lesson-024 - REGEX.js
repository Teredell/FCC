//Lesson 024 - Match Non-Whitespace Characters

let sample = "Whitespace is important in separating words";
//let countNonWhiteSpace = /change/; // Change this line - This is how the line was oringially
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

console.log(result); //Console will output each non-whitespace character
