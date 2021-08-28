//Lesson 019 - Set the Child's Prototype to an Instance of the Parent

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();

beagle.eat();

//below becomes impotant for next exercise
let answer = beagle.constructor;
console.log(answer);