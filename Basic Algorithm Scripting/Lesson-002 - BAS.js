//Lesson 002 - Reverse a String

function reverseString(str) {
  let strArray = [...str];
  //console.log(strArray); //This is me checking
  let newStr = [];
  let strLength = strArray.length;
  let someVar = "";
  let answer = '';
  for(let a = 0; a < strLength; a++){
    someVar = strArray.pop();
    newStr.push(someVar);
    //console.log(newStr); //This is me checking
    answer = newStr.join("");
    //console.log(answer); //This is me checking
  }
  //console.log(strArray); //This is me checking

  return answer;
}

console.log(reverseString("Hello World!"));

/*After reading the challenge i came up with the above solution & learnt about the .join() method to get it done. 
The exercise was looking for me to do the below without using an array as suggested */

function revString(newStr) {
  for (var reversedStr = "", i = newStr.length - 1; i >= 0; i--) {
    reversedStr += newStr[i];
  }
  return reversedStr;
}

console.log(revString("Hello World!"));
