//Lesson 017 - Binary Agents

function binaryAgent(str) {
  let newArray = str.split(" ");
  //console.log(newArray);
  let decimalArray = [];
  for(let i = 0; i < newArray.length; i++){
    let somevar = newArray[i];
    somevar = parseInt(somevar, 2);
    decimalArray.push(somevar);
  }
  //console.log(decimalArray);
  let returnArray = [];
  for(let j = 0; j < decimalArray.length; j++){
    let newvar = "";
    newvar = String.fromCharCode(decimalArray[j]);
    returnArray.push(newvar);
  }
  //console.log(returnArray);
  let sentence = returnArray.join("");
  console.log(sentence);
  return sentence;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");