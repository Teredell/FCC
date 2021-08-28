//Lesson 012 - Prevent Infinite Loops with a Valid Terminal Condition

function myFunc() {
  //for (let i = 1; i != 4; i += 2) { //Incorreect condition
  for (let i = 1; i <= 4; i += 2) { //fixed
    console.log("Still going!");
  }
}

myFunc(); //Will display Still going! twice and then terminate.
