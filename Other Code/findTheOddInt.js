/*Given an array, find the integer that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
*/

A = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];

function findOdd(A) {
    var newObj = {};
    for (i = 0; i < A.length; i++){
        if (newObj.hasOwnProperty(A[i])){
            //access the property and increase counter
            newObj[A[i]] = newObj[A[i]] + 1;
        }else{
            //Add the property & counter
            newObj[A[i]] = 1;
        }
    }
    //now we have our object we need to test each one for modulo
   console.log(newObj);
  }

  findOdd(A);