//Lesson 61 - Comparison with the Strict Inequality Operator

// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);
  console.log(testStrictNotEqual("17"));
  console.log(testStrictNotEqual(17));
  console.log(testStrictNotEqual(10+7));