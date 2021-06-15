//Lesson 022 - Restrict Possible Usernames

//Rules
//1. Usernames can only use alpha-numeric characters.
//2. The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
//3. Username letters can be lowercase and uppercase.
//4. Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

/*Breakdown of answer
The question and answer are very sneakily worded and designed, i'll break it all down into parts.
Part 1 of the answer is ruled out via not including anything for special characters in the answer.
Part 2 of the answer is handled via the \d*$ at the end of both sides of the | 
Part 3 of the answer is handled by the /i flag at the end
Part 4 of the answer a long answer - Break the answer up into to halves, before and after the |. 
/^[a-z][a-z]+\d*$ this allows for first character to be any letter, any case. then allows for second or more characters to be letters, any case AND allows 
for the second or more characters to be AND END with a number *OR* not to end with a number. \d*$ = ZERO or more numbers at the end.
This solves 99% of cases in the exercise but if one wanted a single chracter 2 or more numbers it (/^[a-z][a-z]+\d*$) would fail.
The *OR* statement | of ^[a-z]\d\d+$/ provides for this outcome
*/

let username = "JackOfAllTrades";
//let userCheck = /change/; // Change this line - This is how the line was originally
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username); 

// Console will advise True or False if Username fits regex check
console.log(result); //true

//Further tests
username = "BadUs3rnam3";
result = userCheck.test(username); 
console.log(result); //false

username = "Z97";
result = userCheck.test(username);
console.log(result); //true

username = "c57bT3";
result = userCheck.test(username);
console.log(result); //false

username = "AB1";
result = userCheck.test(username);
console.log(result); //true

username = "A12121212";
result = userCheck.test(username);
console.log(result); //true
