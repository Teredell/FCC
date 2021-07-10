//Lesson 7 - Write Arrow Functions with Parameters

/*
You can pass an argument, if only 1 you can omit the brackets, if more must have.
*/

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6, 7, "cow"];

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat(arr1, arr2));



const testNoBrackets = newVar => newVar + " some test string at the end of input";

console.log(testNoBrackets("Meeeeeeeeee"));
