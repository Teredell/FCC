//Lesson 012 - Slice and Splice

function frankenSplice(arr1, arr2, n) {
  let frankenArray = arr2.slice(0, );
  //console.log(frankenArray); //Sanity check
  for(let x = 0; x < arr1.length; x++){
    frankenArray.splice(n, 0, arr1[x]);
    n++;
  }
  //console.log(frankenArray); //Sanity check
  return frankenArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
