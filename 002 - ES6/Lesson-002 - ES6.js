//Lesson 002 - Compare Scopes of the var and let Keywords
//Using let will give the variable scope to it's own function or block - if var had been used it is global and would
//cause the console.log's to show Block scope i is: block scope && Function scope i is: block scope

function checkScope() {
  //var i = 'function scope'; //incorrect line
  let i = 'function scope';
  if (true) {
    let i = 'block scope'; //added 'let'
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

checkScope(); // The correct console.log's will be Block scope i is: block scope && Function scope i is: function scope
