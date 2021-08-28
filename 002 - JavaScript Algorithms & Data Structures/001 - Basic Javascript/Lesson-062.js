//Lesson 62 - Comparison with the Greater Than Operator

function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);
  console.log(testGreaterThan(9));
  console.log(testGreaterThan(11));
  console.log(testGreaterThan(101));