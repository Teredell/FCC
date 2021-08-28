//Lesson 017 - Use Inheritance So You Don't Repeat Yourself

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function(){console.log("nom nom nom")}
};

//Let's test, because this does not make sense
let pb = new Cat("Princess Bob");

//pb.eat(); //This does not work, which i thought would be the case, animal is not related to cat in anyway. Must get reolved in later lessons

console.log(pb.name);