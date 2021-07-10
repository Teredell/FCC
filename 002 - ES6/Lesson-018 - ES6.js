//Lesson 018 - Write Concise Object Literal Declarations Using Object Property Shorthand
console.log("\nLesson 18");

const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {name, age, gender};
//Below is how exerecise appeared.  
//    name: name,
//    age: age,
//    gender: gender
//  };
// Only change code above this line
};

//Alternatively, one could do this as per the exercise suggestion and eliminate the return.
const newPerson = (name, age, gender) => ({name, age, gender});

//Practically, the above 2 codes create empty objects, we need to create one of these objects to use them
let playerOne = newPerson("George", 32, "male");
let playerTwo = createPerson("Kramer", 34, "non-binary");

//Lets test them out
console.log(playerOne.name);
console.log(playerTwo.gender);
