//Lesson 015 - Find One or More Criminals in a Hunt

//let reCriminals = /./; // Change this line - This is how the line was oringially
let reCriminals = /C+/; // Change this line

//Setup tests below, not in FCC window but required in background

let testOne = "C";
let testTwo = "CC";
let testThree = "P1P5P4CCCcP2P6P3";
let testFour = "P6P2P7P4P5CCCCCP3P1";
let testFive = "";
let testSix = "P1P2P3";
let testSeven = "P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3";

let result = testOne.match(reCriminals);
console.log(result);
result = testTwo.match(reCriminals);
console.log(result);
result = testThree.match(reCriminals);
console.log(result);
result = testFour.match(reCriminals);
console.log(result);
result = testFive.match(reCriminals);
console.log(result);
result = testSix.match(reCriminals);
console.log(result);
result = testSeven.match(reCriminals);
console.log(result);

//yes i was slack and didn't setup more variables for results.
//if done right, console should show; C, CC, CCC, CCCCC, null, null & CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC