//Lesson 6 - Use Arrow Functions to Write Concise Anonymous Functions

//Below code to be rewritten as 1 line using arrow function
//removes need for return, removes need for function word & curly braces

/*
var magic = function() {
  "use strict";
  return new Date();
};
*/

const magic = () => new Date();


console.log(magic());