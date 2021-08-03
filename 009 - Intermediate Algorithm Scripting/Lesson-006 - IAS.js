//Lesson 006 - Pig Latin

function translatePigLatin(str) {
  let vowelRegex = /^[aeiou]/;
  let consonantGroup = /^[^aeiou]*/;
  let boolResult = vowelRegex.test(str);
  var returnString = str;
  var piggy = 'ay';
  var vowelPiggy = 'way';
  if(boolResult){
    //console.log(str);
    //console.log('starts with vowel');
    returnString += vowelPiggy;
  } else{
    //console.log(str + ' is here');
    var cap = str.match(consonantGroup);
    //console.log(cap + ' was taken');
    returnString = returnString.replace(cap, "");
    //console.log(returnString);
    cap += piggy;
    returnString += cap;
    //console.log(returnString); 
  }
  //console.log(returnString);
  return returnString;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
