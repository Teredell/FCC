//Lesson 009 - Missing letters

function fearNotLetter(str) {
  let alphabetString = "abcdefghijklmnopqrstuvwxyz";
  let firstChar = str.charAt(0);
  //match first char position of input string with position on alphabet string
  for(let i = 0; i < alphabetString.length; i++){
    if(firstChar == alphabetString.charAt(i)){
      //console.log(i);
      var startAt = i;
    }
  }
  //loop length of input string from chatAt alphabet string
  for(let j = 0; j < str.length;j++){
    if(str.charAt(j) == alphabetString.charAt(startAt)){
      startAt++;
      //console.log(str.charAt(j))
    } else{
      return alphabetString.charAt(startAt);
    }
  }
  //if no match return missing letters
  //else return undefined
  return;
}

console.log(fearNotLetter("abce"));
