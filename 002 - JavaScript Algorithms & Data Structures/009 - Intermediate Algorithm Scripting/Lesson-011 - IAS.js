//Lesson 011 - Convert HTML Entities
console.log("\nLesson 10");

function convertHTML(str) {
//setup
let apostrophe = "&apos;";
let doubleQuote = "&quot;";
let lesserThan = "&lt;";
let greaterThan = "&gt;";
let ampersand = "&amp;";
var returnArray = [];
var returnString = "";
//a switch statement seems best here
for(let iterator = 0; iterator < str.length; iterator++){
  switch(str.charAt(iterator)){
    case "\'":
      returnArray.push(apostrophe)
      break;
    case "\"":
      returnArray.push(doubleQuote)
      break;
    case "<":
      returnArray.push(lesserThan)
      break;
    case ">":
      returnArray.push(greaterThan)
      break;
    case "&":
      returnArray.push(ampersand)
      break;
    default:
      returnArray.push(str.charAt(iterator));
  } 
}
//followed by a loop
//console.log(returnArray);
returnString = returnArray.join("");
//console.log(returnString);
  return returnString;
}

console.log(convertHTML("Dolce & Gabbana"));
