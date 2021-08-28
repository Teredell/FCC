//Lesson 022 - Use the every Method to Check that Every Element in an Array Meets a Criteria

function checkPositive(arr) {
  // Only change code below this line
  let someBool = arr.every(function(positivityCheck){
    return positivityCheck > 0;
  })
  return someBool;
  // Only change code above this line
}
console.log(checkPositive([1, 2, 3, -4, 5]));
