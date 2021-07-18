//Lesson 013 - Change the Prototype to a New Object

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
numLegs: 4, 
eat: ()=> {console.log("Arf Arf Arf");}, //Just wanted to attempt using some ES6 
describe: function(){console.log("My name is " + this.name)}
};

//Let's test
let jock = new Dog("Jock");
jock.describe();
jock.eat();