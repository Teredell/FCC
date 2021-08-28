//Lesson 019 - Split a String into an Array Using the split Method

function splitify(str) {
  // Only change code below this line
  return str.split(/\d|\s|\-|,|\./);
  // Only change code above this line
}
console.log(splitify("Hello World,I-am code"));

//I seem to have overdone it expecting they might test for underscore, but they arent so the below will work.

function splitifySecond(strSecond) {
  // Only change code below this line
  return strSecond.split(/\W/);
  // Only change code above this line
}
console.log(splitifySecond("Hello World,I-am code"));
