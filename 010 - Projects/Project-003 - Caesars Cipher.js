//Project 003 - Caesars Cipher

function rot13(str) {
  let returnArray = [];
  let testRegax = /[A-Z]/;

  for(let i = 0; i < str.length; i++){
    if(testRegax.test(str.charAt(i))){
    //console.log("i am a capital letter");
    //returnArray.push("i need changing");
    var someNum = str.charCodeAt(i);
      if(str.charCodeAt(i) < 77){
        //console.log(String.fromCharCode(65));
        let returnLetter = someNum + 13;
        returnArray.push(String.fromCharCode(returnLetter));
      }else if(str.charCodeAt(i) > 77){
        //returnArray.push(str.fromCharCode(i + 13));
        //console.log("do spaces work");
      }
    }else{
    //console.log("i am a special character or lower case");
    returnArray.push(str.charAt(i));
    }
  }
  console.log(returnArray);
  return str;
}

rot13("ABC LMN XYZ");