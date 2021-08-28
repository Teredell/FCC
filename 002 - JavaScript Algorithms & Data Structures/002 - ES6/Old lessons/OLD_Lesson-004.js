//Lesson 4 - Mutate an Array Declared with const

const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid

  //You could do it this way or with .pop and .push
  // s.splice(0, 3);
  // s.push(2, 5, 7);

  //But the lesson is likely calling for the following method
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

  // Only change code above this line
}
editInPlace();
console.log(s);


//As the heading suggests you can MUTATE it, you can't re-assign it