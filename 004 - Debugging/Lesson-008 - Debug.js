//Lesson 008 - Catch Missing Open and Closing Parenthesis After a Function Call

function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}
//let result = getNine; - incorrect line
let result = getNine(); //Corrected line

console.log(result); //Should show 9
