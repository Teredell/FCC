//Lesson 50 - Global vs. Local Scope in Functions

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
var outerWear = "sweater";


  // Only change code above this line
  return outerWear;
}

console.log(outerWear);

console.log(myOutfit());
