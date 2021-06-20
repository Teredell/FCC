//Lesson 32 - Use Capture Groups to Search and Replace

let str = "one two three";
//let fixRegex = /change/; // Change this line - This is how the line was originally
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
//let replaceText = ""; // Change this line - This is how the line was originally
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);


// the replace method allows for taking a regex and text (with variables using $)
// in this instance $1 $2 $3 === the values in the the 3 (\w+) from the regex /(\w+)\s(\w+)\s(\w+)/
// the exercise wanted the initial str reversed, this is achieved.
console.log(result); // should display "three two one"

//for the regex i made and test purposes, one could do the following too

str = "lions tigers bears";
result = str.replace(fixRegex, replaceText);
console.log(result); // should display "bears lions tigers"