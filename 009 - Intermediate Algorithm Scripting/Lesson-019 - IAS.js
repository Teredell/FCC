//Lesson 019 - Arguments Optional

function addTogether() {
  var storeHere = 0;
    if(arguments.length > 1){
      for (let i = 0; i < arguments.length; i++){
        //console.log(arguments[i]);  
        if(typeof arguments[i] !== 'number'){
          //console.log("i am not a number");
          return "I have encountered a non number argument";
        }
      storeHere += arguments[i];
      }
      //console.log("I have more than 1 argument");
      return storeHere;
    }else if(arguments.length <= 1){
      //console.log("I have 1 or none arguments");
      if(typeof arguments[0] != 'number'){
        //console.log("I'm here");
        return "I have encountered a non number argument";
      }
        let storeNum = arguments[0];
        return function moreThanOne(x){
          if(typeof x != 'number'){
            //console.log("I'm here2");
            return "I have encountered a non number argument";
          }
        //console.log("I am a recurring function");  
        return x + storeNum;
      }
    }else{console.log("I should not be possible");}
}

console.log(addTogether(2,3));
console.log(addTogether(5)(7));
console.log(addTogether("aaaa"));
console.log(addTogether(2, "3"));
console.log(addTogether(23, 30));
console.log(addTogether("http://bit.ly/IqT6zt"));
