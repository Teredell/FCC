//Lesson 020 - Match All Non-Numbers

//Note capitalized D, not lower d

let movieName = "2001: A Space Odyssey";
//let noNumRegex = /change/; // Change this line - This is how the line was originally
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

console.log(result); // Console will count the characters in the string that match all characters as defined by \D
