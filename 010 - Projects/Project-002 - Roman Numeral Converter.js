//Project 001 - Roman Numeral Converter
console.log("Roman Numeral Converter");

function convertToRoman(num) {
  //Handle edge case of someone inputting 0;
  if(num == 0){
    return 0;
  }
  //Convert incoming number to a string, so i can seperate into columns in an array
  let numString = num.toString();
  //Split the stringified numbers into array
  let numStringArray = numString.split('');
  //convert strings back to numbers as single digits
  let numArray = [];
  for(let i = 0; i < numStringArray.length; i++){
    numArray.push(parseInt(numStringArray[i]));
  }
  //Create a helper function with a switch for different cases
  //if 1-3, 4, 5, 6-8, 9, 0 with different answers per column in the array
  function pushNumbers(someInt, x, y, z){
    let someArray = [];
    switch(someInt){
      case 1:
      case 2:
      case 3:
        for(let i = 0; i < someInt; i++) {
          someArray.push(x);
        }
        break;
      case 4:
        someArray.push(x + y);
        break;
      case 5:
        someArray.push(y);
        break;
      case 6:
      case 7:
      case 8:
        someArray.push(y);
        for(let i = 5; i < someInt; i++){
          someArray.push(x);
        }
        break;
      case 9:
        someArray.push(x + z);
        break;
      case 0:
        someArray.push(z);
        break;
    }
    let digitAnswer = someArray.join('')
    return digitAnswer;
  }
  //Define different results to pass in
  let one = "I";
  let five = "V";
  let ten = "X";
  let fifty = "L";
  let hundred = "C";
  let fiveHundred = "D";
  let thousand = "M";
  let fiveThousand = "V̅";
  let tenThousand = "X̅";
  //Set-up result string
  let answerArray = '';

  //Set-up for each length answer
  if(numArray.length == 4){
    answerArray = pushNumbers(numArray[0], thousand, fiveThousand, tenThousand);
    if(numArray[1] !=0){answerArray += (pushNumbers(numArray[1], hundred, fiveHundred, thousand));}
    if(numArray[2] !=0){answerArray += (pushNumbers(numArray[2], ten, fifty, hundred));}
    if(numArray[3] !=0){answerArray += (pushNumbers(numArray[3], one, five, ten));}
    console.log(answerArray);
  }else if(numArray.length == 3){
    answerArray = (pushNumbers(numArray[0], hundred, fiveHundred, thousand));
    if(numArray[1] !=0){answerArray += (pushNumbers(numArray[1], ten, fifty, hundred));}
    if(numArray[2] !=0){answerArray += (pushNumbers(numArray[2], one, five, ten));}
    console.log(answerArray);
  }else if(numArray.length == 2){
    answerArray = pushNumbers(numArray[0], ten, fifty, hundred);
    if(numArray[1] !=0){answerArray += (pushNumbers(numArray[1], one, five, ten));}
    console.log(answerArray);
  }else{
    console.log("1's")
    answerArray = (pushNumbers(numArray[0], one, five, ten));
    console.log(answerArray);
  }
 return answerArray;
}

convertToRoman(36);
convertToRoman(3);
