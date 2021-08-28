//Lesson 66 - Comparisons with the Logical And Operator

function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val >= 25) {
      return "Yes";
    }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);

  console.log(testLogicalAnd(30));
  
  console.log(testLogicalAnd(55));