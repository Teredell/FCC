//Lesson 016 - Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

const squareList = arr => {
  // Only change code below this line
  let firstFilter = arr.filter(elem => elem >= 0);
  console.log(firstFilter);
  let secondFilter = firstFilter.filter(elem => (elem % 1) == false);
  console.log(secondFilter);
  return arr = secondFilter.map(elem => (elem*elem));;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

// My solve is close to the help answer below
/*
const squareList = (arr) => {
  // Only change code below this line
  return arr
          .filter(num => num > 0 && num % parseInt(num) === 0)
          .map(num => Math.pow(num, 2));
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
*/