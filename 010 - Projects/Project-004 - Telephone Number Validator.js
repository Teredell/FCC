//Project 004 - Telephone Number Validator

function telephoneCheck(str) {
  let mustNotContain = /[a-zA-Z?]/; //If it has letters or a question mark
  let startsWithRegex = /^\d|^\(/;
  let bracketDigits = /\(\d{3}\)/;
  let bracket = /\)|\(/;
  let finish = /\d{4}$/;
  let numbers = /\d/;
  if(mustNotContain.test(str) == true){
    console.log(str + " false first gate");
  return false;
 }
 if(startsWithRegex.test(str) == false){
  console.log(str + " false 2nd gate");
   return false;
 }
  if(bracket.test(str) == true){
    if(bracketDigits.test(str) == false){
      console.log(str + " false 3rd gate");
      return false;
    }
  }
  if(finish.test(str) == false){
    console.log(str + " false 4th gate");
    return false;
  }
//all edges cases handled!
//now strip str of everything not a number
//if 11 numbers must start with 1

let someVar = []
for(let i =0; i < str.length; i++){
  if(numbers.test(str.charAt(i))){
  someVar.push(str.charAt(i));
  }
}
console.log(someVar);
if(someVar.length <= 9 || someVar.length >= 12){
  console.log(str + " false 5th gate")
  return false;
}
if(someVar.length == 11){
  if(someVar[0] !== '1'){
    console.log(str + " false 6th gate")
    return false;
  }
}

 /*if i get thru these, strip whitespace and dashes
 if 11 digits, first digit must be 1
 if 10*/

  /*
  must start with ( or a number
  only contains (, ), -, or numbers
  if ( must be followed by xxx) maybe use \d{3} in a regex

  */

    console.log(true);
  return true;
}






/*
telephoneCheck("555-555-5555");
telephoneCheck("555-555-5555"); //should return a boolean.
telephoneCheck("1 555-555-5555"); //should return true
telephoneCheck("1 (555) 555-5555"); //should return true.
telephoneCheck("5555555555"); //should return true.
telephoneCheck("555-555-5555"); //should return true.
telephoneCheck("(555)555-5555"); //should return true.
telephoneCheck("1(555)555-5555"); //should return true.
telephoneCheck("555-5555"); //should return false.
telephoneCheck("5555555"); //should return false.
telephoneCheck("1 555)555-5555"); //should return false.
telephoneCheck("1 555 555 5555"); //should return true.
telephoneCheck("1 456 789 4444"); //should return true.
console.log("everything below here should be false");
telephoneCheck("123**&!!asdf#"); //should return false.
telephoneCheck("55555555"); //should return false.
telephoneCheck("(6054756961)"); //should return false.
telephoneCheck("2 (757) 622-7382"); //should return false.
telephoneCheck("0 (757) 622-7382"); //should return false.
telephoneCheck("-1 (757) 622-7382"); //should return false.
telephoneCheck("2 757 622-7382"); //should return false.
telephoneCheck("10 (757) 622-7382"); //should return false.
telephoneCheck("27576227382"); //should return false.
telephoneCheck("(275)76227382"); //should return false.
telephoneCheck("2(757)6227382"); //should return false.
telephoneCheck("2(757)622-7382"); //should return false.
telephoneCheck("555)-555-5555"); //should return false.
telephoneCheck("(555-555-5555"); //should return false.
telephoneCheck("(555)5(55?)-5555"); //should return false.
telephoneCheck("55 55-55-555-5"); //should return false.



console.log("everything below here should be true");
console.log("everything below here should be true");
console.log("everything below here should be true\n\n");
*/
telephoneCheck("1 456 789 4444"); //should return true.
telephoneCheck("1 555 555 5555"); //should return true.
telephoneCheck("1(555)555-5555"); //should return true.
