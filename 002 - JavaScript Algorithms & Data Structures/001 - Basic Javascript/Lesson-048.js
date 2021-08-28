//Lesson 48 - Global Scope and Functions

// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") { // <--- must evaluate to false
    output += " oopsGlobal: " + oopsGlobal;
  }
  //console.log(oopsGlobal); <--- throws an error
  console.log(output);
}

fun2();

/*worth noting a difference between coding on FCC in browser and in VS code.
It would seem, maybe it's an automated feature? that missing off "var" does not make a variable global in VS code.
*/