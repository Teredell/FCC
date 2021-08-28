//Lesson 015 - Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  //const arr = list; // Before changes
  const [notOne, notTwo, ...arr] = list; // After changes
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

console.log(source);
console.log(arr);
//Elements 1 & 2 are stored in variables in the function, as they are const they cannot be logged outside of the scope.