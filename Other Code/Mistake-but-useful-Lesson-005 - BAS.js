//Lesson 005 - Return Largest Numbers in Arrays

function largestOfFour(arr) {
  let largestArray = 0;
  let biggestInLargest = 0;
  let compareNext = 0;
  let innerArrLargest = 0;

  for(let x = 0; x < arr.length; x++){
    //console.log(arr[x]); //For sanity
    for(let y = 0; y < arr[x].length; y++){
      //console.log(arr[x][y]);
      if(arr[x][y] > innerArrLargest){
        innerArrLargest = arr[x][y];
        //console.log("Biggest is now: " + innerArrLargest);
      }
    }
    if(innerArrLargest > compareNext){
      compareNext = innerArrLargest;
      largestArray = arr[x];

    }
  }

  return largestArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 5, 1, 3], [1000, 1001, 857, 1], [13, 27, 18, 26], [32, 35, 37, 39]]));

//I buggered up i thought the exercise wanted me to return the array with the larest number in it, NOT HAHA.