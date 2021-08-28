//Lesson 025 - Specify Upper and Lower Number of Matches

let ohStr = "Ohhh no";
//let ohRegex = /change/; // Change this line - This is how the line was oringially
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);

console.log(result); // Console will output True if string ohStr has between 3 & 5 h's, in this case True
