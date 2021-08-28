//Lesson 020 - Reset an Inherited Constructor Property

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

let duck = new Bird();
let beagle = new Dog();

let newanswer = duck.constructor;
console.log(newanswer);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

console.log(newanswer);
//This doesn't work because i have crated the duck before i change the constructor to Bird.

let swallow = new Bird();

let swallowConstructor = swallow.constructor;
console.log(swallowConstructor);

//And that proves it.