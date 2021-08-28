//Lesson 005 - Return Largest Numbers in Arrays

function largestOfFour(arr) {
  let biggestInEach = [];
  let innerArrLargest = 0;

  for(let x = 0; x < arr.length; x++){
    //console.log(arr[x]); //For sanity
    innerArrLargest = arr[x][0];
    for(let y = 0; y < arr[x].length; y++){
      //console.log(arr[x][y]);
      if(arr[x][y] > innerArrLargest){
        innerArrLargest = arr[x][y];
        //console.log("Biggest is now: " + innerArrLargest);
      }
    }
    biggestInEach.push(innerArrLargest);
    }

  return biggestInEach;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));