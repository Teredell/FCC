//Lesson 002 - Diff Two Arrays

function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  console.log(newArr);
  let returnArr = newArr.filter(eachElement => 
  !arr1.includes(eachElement) || 
  !arr2.includes(eachElement))
  return returnArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
