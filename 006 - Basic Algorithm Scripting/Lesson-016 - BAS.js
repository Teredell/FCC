//Lesson 016 - Chunky Monkey

function chunkArrayInGroups(arr, size) {
  let insideArr = [];
  
  for(let x = 0; x < arr.length; x += size){
    insideArr.push(arr.slice(x, x + size));
  }
  //console.log(insideArr);
  return insideArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
