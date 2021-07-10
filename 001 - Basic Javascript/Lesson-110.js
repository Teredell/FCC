//Lesson 110 - Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {
  if(startNum === endNum){
    return [startNum]; //on the last recurse the startnum is added to the array. If same then call it.
  }else{
    const arr = rangeOfNumbers(startNum, endNum - 1); //Mat, if you're referencing this, remember this line has to have the same variables as the initial function
    arr.push(endNum);
    return arr;
  }
};

console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(9, 9));
console.log(rangeOfNumbers(1, 10));