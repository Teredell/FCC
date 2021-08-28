//Lesson 014 - Add Elements to the End of an Array Using concat Instead of push

function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.concat(newItem);

  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
let result = nonMutatingPush(first, second);

console.log(result);