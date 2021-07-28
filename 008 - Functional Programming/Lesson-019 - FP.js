//Lesson 019 - Return a Sorted Array Without Changing the Original Array

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  let newArray = [];
  newArray = newArray.concat(arr);
  return newArray.sort(function(a, b){
    return a === b ? 0 : a > b ? 1 : -1;
  });
  
  // Only change code above this line
}
console.log(nonMutatingSort(globalArray));
