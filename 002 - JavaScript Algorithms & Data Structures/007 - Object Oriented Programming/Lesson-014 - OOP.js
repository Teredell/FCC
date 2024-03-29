//Lesson 014 - Remember to Set the Constructor Property when Changing the Prototype

function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog, 
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};


//Let's test
function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog){
  return true;
  }else {
  return false;
  }
}

let mastif = new Dog("King Bob");

console.log(joinDogFraternity(mastif));
