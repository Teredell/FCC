//Lesson 016 - Steamroller

function steamrollArray(arr) {
  let newArray = [];
  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      newArray.push(...steamrollArray(arr[i])); //this is the bit that takes you back to the start, rescursion!
      //console.log("back to the start");
    }else{
      newArray.push(arr[i]);
    }
  }
  return newArray;
}


//console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
//console.log(steamrollArray([1, [], [3, [[4]]]]));
//console.log(steamrollArray([1, {}, [3, [[4]]]]));
