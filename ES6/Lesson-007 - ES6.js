//Lesson 007 - Write Arrow Functions with Parameters

//Below to be re-written
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5])); //will return [1, 2, 3, 4, 5]


//so it can be shown like this
const myNewConcat = (array1, array2) => array1.concat(array2);

console.log(myNewConcat([1, 2], [3, 4, 5]));//will return the same array

//This lesson also teaches us that the parentheses are optional for single parameter functions
//See below

const multiplyByFive = inputVariable => inputVariable * 5;

console.log(multiplyByFive(6));