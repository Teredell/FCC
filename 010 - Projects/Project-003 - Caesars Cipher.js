//Project 003 - Caesars Cipher

function rot13(str) {
  //Setup variables
    let returnArray = [];
    let testRegax = /[A-Z]/; //All tests only have uppercase or special chars.
    let letterChar = 0;
    let returnLetter = 0;
    let result = '';
  
  //For loop to perform action on each character in input string
    for(let i = 0; i < str.length; i++){
  //Test if current char fails testRegex, if yes is a special character so pass straight into array
      if(testRegax.test(str.charAt(i)) == false){
        returnArray.push(str.charAt(i));
  //Test if passes Regex, if it does assign its char number to a variable
      }else if(testRegax.test(str.charAt(i))){
      letterChar = str.charCodeAt(i);
  //If letter is A-M (M=77) then add 13 and return corresponding character to the array
        if(str.charCodeAt(i) <= 77){
          returnLetter = letterChar + 13;
          returnArray.push(String.fromCharCode(returnLetter));
  //If letter is N-Z then subtract 13 and return corresponding character to the array
        }else if(str.charCodeAt(i) > 77){
          returnLetter = letterChar - 13;
          returnArray.push(String.fromCharCode(returnLetter));
        }
      }
    }
  //Join array into a string for correct format requested  
    result = returnArray.join('');
    return result;
  }
  
//Tests
console.log(rot13("ABC LMN XYZ"));
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));