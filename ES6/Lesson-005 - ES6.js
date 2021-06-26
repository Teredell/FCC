//Lesson 005 - Prevent Object Mutation

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
    console.log("we got here");
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

console.log(PI); // Shows that PI remains 3.14 after the function attempts to change it to 99.