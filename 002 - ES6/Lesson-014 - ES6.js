//Lesson 014 - Use Destructuring Assignment to Assign Variables from Arrays

let a = 8, b = 6;
// Only change code below this line
console.log("Before the changing code variable a equals: " + a);
console.log("Before the changing code variable b equals: " + b);

[b,a] = [a,b]; //This code swaps the values from a to b and b to a.

console.log("After change variable a equals: " + a);
console.log("After change variable b equals: " + b);


//I came up with the below solution from the provided lesson infomation, which does not enact a pass on the lesson but it does.

let x = 8, y = 6;
// Only change code below this line
let z = [x, y];
console.log(z);

console.log("Before the changing code variable x equals: " + x);
console.log("Before the changing code variable y equals: " + y);

[y, x] = z;

console.log("After change variable x equals: " + x);
console.log("After change variable y equals: " + y);

//Other lessons were learned in this one, which i found interesting.
//commas to reach index wanted!

const [valueOne, valueTwo,,,,, valueSeven] = [1, 2, 3, 4, 5, 6, 7];
console.log(valueOne);
console.log(valueTwo);
console.log(valueSeven);