//Lesson 020 - Use class Syntax to Define a Constructor Function

// Only change code below this line - There was no code initially, all below was added.
class Vegetable{
  constructor(name){
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
