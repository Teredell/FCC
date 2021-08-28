//Lesson 2 - Compare Scopes of the var and let Keywords

function checkScope() {
    'use strict';
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  
console.log(checkScope());


// I feel like somewhere along the way it was missed that a variable could be changed into a function like below, maybe it's just lack of coffee today.
var someVar;
someVar = function(){
    return "hello world";
}
console.log("Mat's test exercise = " + someVar());