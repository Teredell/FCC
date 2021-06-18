//Lesson 028 - Check for All or None

let favWord = "favorite";
//let favRegex = /change/; // Change this line - This is how the line was originally
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

console.log(result); // Console will output True if string favWord has the "u" present or doesn't, in this case True
