//Lesson 007 - Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
  if(num <= 0){
    return "";
  }else{
    let newStr = "";
    for(let x = 0;x < num; x++){
      newStr += str;
      //console.log(newStr); //sanity
    }
    return newStr;
  }

}

console.log(repeatStringNumTimes("abc", 3));