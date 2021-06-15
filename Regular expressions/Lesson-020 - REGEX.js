//Lesson 020 - Match All Numbers

let movieName = "2001: A Space Odyssey";
//let numRegex = /change/; // Change this line - This is how the line was originally
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

console.log(result); // Console will count the characters in the string that match all characters as defined by \d
