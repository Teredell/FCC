//Lesson 104 - Generate Random Whole Numbers within a Range

function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  // Only change code above this line
}

//Short explainitory note. 
//Math.random() * (myMax-myMin) + 1 ---> This bit generates random whole number between 0 & myMax
// Then the + myMin brings the number up by myMin.
//If it generated 0 as the random, then the output would be 3

console.log(randomRange(3, 15));