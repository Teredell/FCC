//Lesson 100 - Replace Loops using Recursion

function sum(arr, n) {
  // Only change code below this line
if (n <= 0){
  return 0;
}
else{
  return sum(arr, n - 1) + arr[n - 1];
}
  // Only change code above this line
}

console.log(sum([1], 0)); //should equal 0.
console.log(sum([2, 3, 4], 1)); //should equal 2.
console.log(sum([2, 3, 4, 5], 3)); //should equal 9.
console.log(sum([2, 3, 4, 5], 4)); //should equal 14.

//Additional work solidifying how recusion works, using lesson example

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

console.log(multiply([1], 0)); //should equal 1
console.log(multiply([2, 3, 4], 1)); //should equal 2
console.log(multiply([3, 4, 5, 6], 3)); //should equal 60
console.log(multiply([21, 13, 44, 5], 3)); //should equal 12012

/* After much head-bashing against the wall and edits
The way i needed to get understanding, rightly or wrongly was this....
After the code runs it looks like: (1) * (n[2] * n[1] * n)
Where 1 is the last run through the code */

// one more homebrewed example to solidify

function matLoop(matVar){
  if (matVar >= 5){
    return "Recursion ends here";
  }else{
    console.log(matVar);
    return matLoop(matVar + 1);
  }
}

console.log(matLoop(1));