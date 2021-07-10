//Lesson 003 - Declare a Read-Only Variable with the const Keyword

function printManyTimes(str) {

  // Only change code below this line

  const SENTENCE = str + " is cool!"; //changed var to const & changed sentence to SENTENCE
  for (let i = 0; i < str.length; i+=2) { //changed var to let
    console.log(SENTENCE); //changed sentence to SENTENCE
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");
