//Lesson 69 - Introducing Else If Statements

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }else if (val < 5) {
    return "Smaller than 5";
  } else{
  return "Between 5 and 10";
  }

}

console.log(testElseIf(7));

console.log(testElseIf(11));

console.log(testElseIf(2));