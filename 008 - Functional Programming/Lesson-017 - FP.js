//Lesson 017 - Sort an Array Alphabetically using the sort Method

function alphabeticalOrder(arr) {
  // Only change code below this line
  return arr.sort(function(a, b){
    return a === b ? 0 : a > b ? 1 : -1;
  });

  // Only change code above this line
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

//But I probably would have written it like below, becuase i'm not that comfortable with ternery operators yet

function theMatWay(someArr){
    return someArr.sort(function(c, d){
    if(c === d){
      return 0;
    }else if(c > d){
      return 1;
    }else{
      return -1;
    }
  });
}

console.log(theMatWay(["a", "d", "c", "a", "z", "g"]));
