//Lesson 57 - Comparison with the Equality Operator

// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);
  console.log(testEqual(10));
  console.log(testEqual(12));