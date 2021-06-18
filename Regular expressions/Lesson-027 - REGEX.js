//Lesson 027 - Specify Exact Number of Matches

let timStr = "Timmmmber";
//let timRegex = /change/; // Change this line - This is how the line was oringially
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

console.log(result); // Console will output True if string haRegex has exactly 4 m's, in this case True
