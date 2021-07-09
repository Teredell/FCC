//Lesson 004 - Find the Longest Word in a String

function findLongestWordLength(str) {
  let myArr = str.split(" ");
  let largestString = 0;
  //console.log(myArr); //Checking sanity.
  for(let x =0; x < myArr.length;x++){
    if (myArr[x].length > largestString){
      largestString = myArr[x].length;
    }
  }
  return largestString;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
