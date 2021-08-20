//Project 001 - Roman Numeral Converter
console.log("Roman Numeral Converter");

function convertToRoman(num) {
  if(num == 0){
    return 0;
  }
  //maybe an array for each column of numbers 100's, 10's, 1's
  let numString = num.toString();
  //console.log(numString);
  //console.log(typeof numString);
  let numStringArray = numString.split('');
  //console.log(numStringArray);

  let numArray = [];
  for(let i = 0; i < numStringArray.length; i++){
    numArray.push(parseInt(numStringArray[i]));
  }
  //console.log(numArray);
  //maybe convert number to string to do that?
  //if loop 1-3 or 6-8 push i's, x, c's, m's
  //need them back to numbers
  function pushNumbers(someInt, x, y, z){
    let someArray = [];
    switch(someInt){
      case 1:
      case 2:
      case 3:
        //console.log("do loop");
        for(let i = 0; i < someInt; i++) {
          someArray.push(x);
        }
        break;
      case 4:
        //console.log("do 4");
        someArray.push(x + y);
        break;
      case 5:
      //console.log("do 5");
        someArray.push(y);
        break;
      case 6:
      case 7:
      case 8:
            //console.log("do loop");
            someArray.push(y);
            for(let i = 5; i < someInt; i++){
              someArray.push(x);
            }
        break;
      case 9:
      //console.log("do 4");
      someArray.push(x + z);
        break;
        case 0:
        //console.log("do 0");
        someArray.push(z);
        break;
    }
    //console.log(someArray);
    let someFuck = someArray.join('')
    return someFuck;
      }

  let one = "I";
  let five = "V";
  let ten = "X";
  let fifty = "L";
  let hundred = "C";
  let fiveHundred = "D";
  let thousand = "M";
  let fiveThousand = "V̅";
  let tenThousand = "X̅";
  //if 0, 4, 5, 9 push V's, etc
  let answerArray = '';
  if(numArray.length == 4){
    console.log("1000's")
  answerArray = pushNumbers(numArray[0], thousand, fiveThousand, tenThousand);
  if(numArray[1] !=0){answerArray += (pushNumbers(numArray[1], hundred, fiveHundred, thousand));}
  if(numArray[2] !=0){answerArray += (pushNumbers(numArray[2], ten, fifty, hundred));}
  if(numArray[3] !=0){answerArray += (pushNumbers(numArray[3], one, five, ten));}
  console.log(answerArray);


  }else if(numArray.length == 3){
console.log("100's")
answerArray = (pushNumbers(numArray[0], hundred, fiveHundred, thousand));
  if(numArray[1] !=0){answerArray += (pushNumbers(numArray[1], ten, fifty, hundred));}
  if(numArray[2] !=0){answerArray += (pushNumbers(numArray[2], one, five, ten));}
  console.log(answerArray);
  }else if(numArray.length == 2){
console.log("10's");
  answerArray = pushNumbers(numArray[0], ten, fifty, hundred);
  if(numArray[1] !=0){answerArray += (pushNumbers(numArray[1], one, five, ten));}
  console.log(answerArray);
  }else{
console.log("1's")
answerArray = (pushNumbers(numArray[0], one, five, ten));
  console.log(answerArray);

  }
  //Maybe????
  //maybe a massive switch??


 return answerArray;
}

//convertToRoman(36);
//convertToRoman(3);
//convertToRoman(306);
//convertToRoman(3600);
//convertToRoman(4);
//convertToRoman(9);
convertToRoman(501);
convertToRoman(1000);
