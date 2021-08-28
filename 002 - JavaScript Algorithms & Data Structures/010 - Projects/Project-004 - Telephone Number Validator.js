//Project 004 - Telephone Number Validator

function telephoneCheck(str) {
//REGEX's to test
let mustNotContain = /[a-zA-Z?]/; //If it has letters or a question mark
let startsWithRegex = /^\d|^\(/;
let bracketDigits = /\(\d{3}\)/;
let bracket = /\)|\(/;
let finish = /\d{4}$/;
let numbers = /\d/;
//A series of REGEX tests to eliminate non-conforming strings
//Test 1 - If i has letters of question marks.
  if(mustNotContain.test(str) == true){
    //console.log(str + " false first gate");
  return false;
 }
//Test 2 - Must start with a digit or open parenthesis
 if(startsWithRegex.test(str) == false){
  //console.log(str + " false 2nd gate");
   return false;
 }
//Test 3 - If string has open or close parenthesis
  if(bracket.test(str) == true){
    //Test 3.1 - If it has parentheses they must have 3 digits between them
    if(bracketDigits.test(str) == false){
      //console.log(str + " false 3rd gate");
      return false;
    }
  }
//Test 4 - Must end with 4 digits
  if(finish.test(str) == false){
    //console.log(str + " false 4th gate");
    return false;
  }
//Majority of issues handled, now to finish. 
//Strip str of everything not a number & create array
let strArray = [];
  for(let i =0; i < str.length; i++){
    if(numbers.test(str.charAt(i))){
    strArray.push(str.charAt(i));
    }
  }
//Test 5 - If array has anything other than 10 or 11 digits
  if(strArray.length <= 9 || strArray.length >= 12){
    //console.log(str + " false 5th gate")
    return false;
  }
//Test 6 - If array has 11 digits, must start with 1 (which is still a char not a number)
  if(strArray.length == 11){
    if(strArray[0] !== '1'){
      //console.log(str + " false 6th gate")
      return false;
    }
  }
//If str has passed all these tests it is valid to pass.
  //console.log(true);
  return true;
}

//Tests
console.log(telephoneCheck("555-555-5555")); //should return a boolean.
console.log(telephoneCheck("1 555-555-5555")); //should return true
console.log(telephoneCheck("1 (555) 555-5555")); //should return true.
console.log(telephoneCheck("5555555555")); //should return true.
console.log(telephoneCheck("555-555-5555")); //should return true.
console.log(telephoneCheck("(555)555-5555")); //should return true.
console.log(telephoneCheck("1(555)555-5555")); //should return true.
console.log(telephoneCheck("555-5555")); //should return false.
console.log(telephoneCheck("5555555")); //should return false.
console.log(telephoneCheck("1 555)555-5555")); //should return false.
console.log(telephoneCheck("1 555 555 5555")); //should return true.
console.log(telephoneCheck("1 456 789 4444")); //should return true.
console.log("\neverything below here should be false\n");
console.log(telephoneCheck("123**&!!asdf#")); //should return false.
console.log(telephoneCheck("55555555")); //should return false.
console.log(telephoneCheck("(6054756961)")); //should return false.
console.log(telephoneCheck("2 (757) 622-7382")); //should return false.
console.log(telephoneCheck("0 (757) 622-7382")); //should return false.
console.log(telephoneCheck("-1 (757) 622-7382")); //should return false.
console.log(telephoneCheck("2 757 622-7382")); //should return false.
console.log(telephoneCheck("10 (757) 622-7382")); //should return false.
console.log(telephoneCheck("27576227382")); //should return false.
console.log(telephoneCheck("(275)76227382")); //should return false.
console.log(telephoneCheck("2(757)6227382")); //should return false.
console.log(telephoneCheck("2(757)622-7382")); //should return false.
console.log(telephoneCheck("555)-555-5555")); //should return false.
console.log(telephoneCheck("(555-555-5555")); //should return false.
console.log(telephoneCheck("(555)5(55?)-5555")); //should return false.
console.log(telephoneCheck("55 55-55-555-5")); //should return false.