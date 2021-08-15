//Lesson 015 - Drop it

function dropElements(arr, func) {
  let arrLength = arr.length;
  for(let i = 0; i < arrLength; i++){
    if(func(arr[0]) == true){
      break;
    }else{
      arr.shift();
    }
  }
  return arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));