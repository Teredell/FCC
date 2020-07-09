//Lesson 49 - Local Scope and Functions

function myLocalScope() {
    'use strict';
  
    // Only change code below this line
  var myVar = 1;
  
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  
  //console.log('outside myLocalScope', myVar); //<--uncomment and program throws an error, which is the point.
  