//Lesson 005 - Spinal Tap Case

function spinalCase(str) {
  //anytime we encounter a space, capital letter or dash or underscore
  let sentenceArray = str.split(/(?=[A-Z])|(?<=\s)|(?=\s)|(?=\-)|(?<=\-)|(?=\_)/);
  //console.log(sentenceArray);
  var newArr = [];
  for(let i = 0; i < sentenceArray.length; i++){
    if (sentenceArray[i] != " " && sentenceArray[i] != "-" && sentenceArray[i] != "_" ){
      //console.log(sentenceArray[i]);
      newArr.push(sentenceArray[i]);
      var spinalSentence = newArr.join("-");
    }
  };
  //console.log(newArr);
  let spinalReturn = spinalSentence.toLowerCase();
  //console.log(spinalReturn);
  return spinalReturn;
}

//console.log(spinalCase('This Is Spinal Tap'));
//console.log(spinalCase("thisIsSpinalTap"));
//console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
//console.log(spinalCase("AllThe-small Things"));

//This is the answer i probably would have gone with
function spinalCaseAnswer(strTwo) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return strTwo
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
