//Lesson 001 - Sum All Numbers in a Range

function sumAll(arr) {
  //first we have to sort, with the compareFunction style sort so 5 comes before 10
  let newArr = arr.sort(function(a, b){
    return a === b ? 0 : a > b ? 1 : -1;
  });
  //console.log(newArr); works
  //and then some sort of loop where we add the counter starting at the bottom and increment and add
  var totalSum = 0;

  for(newArr[0]; newArr[0] <= newArr[1]; newArr[0]++){
    totalSum += newArr[0];
    //console.log(totalSum); works
  }
  return totalSum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
