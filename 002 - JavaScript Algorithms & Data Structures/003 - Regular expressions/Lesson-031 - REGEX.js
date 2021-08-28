//Lesson 031 - Reuse Patterns Using Capture GroupsPassed

//This one is a bit of a head fuck, but i think i've got it

let repeatNum = "42 42 42";
//let reRegex = /change/; // Change this line - This is how the line was originally
let reRegex = /^(\d*)(\s)\1\2\1$/; // Change this line
let result = reRegex.test(repeatNum);

//ok briefly before i walk away, hee goes future Mat.
//(\d*) is match any number (\s) is a space
// \1 acts like a variable! so \1 === (\d*) 
// ergo \2 === (\s)
// SO.... you are matching (\d*)(\s)(\1)(\2)(\1)
// where (\1) is like a VARIABLE that has had its value assigned by the first (\d*)
//We aren't done yet, because patterns like 42 42 42 42 will still match, thi is because (\d*)(\s)(\1)(\2)(\1) is ALREADY A MATCH at 42 42 42!!
//SO to make it so 42 42 42 42 WONT match and only 42 42 42 WILL match we need the ^ at the start and the $ and the end.

console.log(result); // Which will damn well be True for this

repeatNum = "42 42 42 42";
result = reRegex.test(repeatNum);
console.log(result); // Which will damn well be FALSE for this