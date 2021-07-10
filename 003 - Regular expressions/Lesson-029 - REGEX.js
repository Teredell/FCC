//Lesson 029 - Positive and Negative Lookahead

let sampleWord = "astronaut";
//let pwRegex = /change/; // Change this line - This is how the line was originally
let pwRegex = /(?=\w{6,})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

//In the first (?=\w{6,}) we are establishing the regex must be 6 or more characters that are [A-Za-z0-9_]
//In the second part (?=\w*\d{2}) we are saying any amount/combo of [A-Za-z0-9_] && has 2 consecutive digits

console.log(result); // astronaut will fail
sampleWord = 123456;
result = pwRegex.test(sampleWord);
console.log(result); // longer than 5 & 2 consecutive digits

