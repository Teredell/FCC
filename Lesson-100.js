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
    	//console.log("I'm out");
      return 1;
    } else {
    	//console.log (n);
    	//var some = multiply(arr, n - 1);
    	    	//console.log ("multiply(arr, n-1 evaluates to: " + some);

    	//var nnn = arr[n - 1];;
    	//    	console.log ("arr[n-1] evaluates to: " + nnn);
    	var currentVal = multiply(arr, n - 1);

    		console.log("Current val is: " + currentVal);
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

//console.log(multiply([1], 0)); //should equal 1. because it is the base case.
console.log("show me what happens");
//console.log(multiply([2, 3, 4], 1)); //should equal 2 because........
//console.log("show me what happens");
console.log(multiply([3, 4, 5, 6], 3));
//console.log(multiply([21, 13, 44, 5], 3)); //should equal 24