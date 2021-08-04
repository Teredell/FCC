//Lesson 010 - Sorted Union

function uniteUnique(arr) {
  //var someArr = []; not needed
  var newArr = [];
  for(i = 0; i < arguments.length; i++){
    //someArr.push(arguments[i]); not needed was for testing
    for (j = 0; j < arguments[i].length; j++){
      if(!newArr.includes(arguments[i][j])){
      newArr.push(arguments[i][j]);
      }
    }
  }
  //console.log(someArr); not needed
  //console.log(newArr); confirmed correct
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
