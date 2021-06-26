//Lesson 009 - Use the Rest Parameter with Function Parameters

/*Before changes
const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}

After changes*/
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(2, 3, 4, 5, 6));




//Some test code for understanding
let newArr = [1, 2, 3];

let testFunc = function(a, b){
  return a + b;
}

console.log(newArr.reduce(testFunc));