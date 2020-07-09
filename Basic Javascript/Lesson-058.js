//Lesson 58 - Comparison with the Strict Equality Operator

// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
  console.log(testStrict("7"));
  
  console.log(testStrict(7));