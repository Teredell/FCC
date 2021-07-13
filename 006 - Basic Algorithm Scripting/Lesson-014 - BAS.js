//Lesson 14 - Where do I Belong

function compare(a, b){
  if (a < b){return -1;}
  if (a > b){return 1;}
  if (a === b){return 0;}
}

function getIndexToIns(arr, num) {
  arr.sort(compare);
  //console.log(arr); //sanity
  let x = 0;
  for(x; x < arr.length; x++){
    if(arr[x] >= num){
      //console.log(x); //Sanity
      return x;
    } 
  }
  return arr.length;
}

console.log(getIndexToIns([40, 60], 50)); //should return 1.
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); //should return 3.
