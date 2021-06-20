//Lesson 033 - Remove Whitespace from Start and End

let hello = "   Hello, World!  ";
//let wsRegex = /change/; // Change this line - This is how the line was originally
let wsRegex = /^\s+|\s+$/g; // Change this line
//let result = hello; // Change this line - This is how the line was originally
let result = hello.replace(wsRegex, ''); // Change this line

//it's worth noting we're looking for whitespace and replacing it with nothing.

console.log(result); // Should remove the whitespace from the start and end of any string