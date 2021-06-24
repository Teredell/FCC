//Lesson 001 - Explore Differences Between the var and let Keywords

//var catName; //Previous incorrect
//var quote; //Previous incorrect
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Princess Bob";
  quote = catName + " says Meow!";
  return quote; //Added to demo lesson
}

catTalk();

console.log(catTalk()); // Will log Princess Bob says Meow!
