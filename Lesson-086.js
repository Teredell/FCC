//Lesson 86 - Delete Properties from a JavaScript Object

// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Only change code below this line

  console.log(myDog);

  delete myDog.tails;

  console.log(myDog);