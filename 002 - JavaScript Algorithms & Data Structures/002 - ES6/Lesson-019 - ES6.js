//Lesson 019 - Write Concise Declarative Functions with ES6

// Only change code below this line
const bicycle = {
  gear: 2,
  //setGear: function(newGear) {    //Before changes
  setGear(newGear){                 //After changes
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);

console.log(bicycle.gear);

bicycle.setGear(5);

console.log(bicycle.gear);
