//Lesson 003 - Create a Method on an Object

let dog = {
  name: "Woofy", 
  numLegs: 3, 
  numWheels: 1,
  sayLegs: function(){
    return "This dog has " + dog.numLegs + " legs.";
  }
};

console.log(dog.sayLegs());
