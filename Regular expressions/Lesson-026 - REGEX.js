//Lesson 026 - Specify Only the Lower Number of Matches

let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line - This is how the line was oringially
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

console.log(result); // Console will output True if string haRegex has between 4 or more z's, in this case True
