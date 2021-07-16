//Lesson 004 - Make Code More Reusable with the this Keyword

let dog = {
  name: "Woofy", 
  numLegs: 3, 
  numWheels: 1,
  sayWheels: function(){
    return "This dog has " + this.numWheels + " wheel/s.";
  }
};

console.log(dog.sayWheels());
