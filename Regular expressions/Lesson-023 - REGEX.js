//Lesson 023 - Match Whitespace

let sample = "Whitespace is important in separating words";
//let countWhiteSpace = /change/; // Change this line - This is how the line was oringially
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

console.log(result); // Console will output 5 seperate whitespaces if correct
