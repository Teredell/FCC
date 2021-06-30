// Only change code below this line
class Thermostat{
  constructor(someVal){
    this._someVal = someVal;
  }
  get temperature(){
    return (5/9) * (this._someVal -32);
  }
  set temperature(newVal){
    this._someVal = (newVal * 9) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale

//Check value of _someVal
console.log(thermos);
//Use temperature method to convert F value into C AND output to user
console.log(thermos.temperature);

console.log("\nnext"); //Spacing for testing below

thermos.temperature = 26;
console.log(thermos);
console.log(thermos.temperature);

thermos.temperature = 100;
console.log(thermos);
console.log(thermos.temperature);

//After reading more and messing around - my head is sore today this is what i think is going on.
//The property someVal is always FAHRENHEIT - ALWAYS.
//When a new CELSIUS value is given to the thermos - and to work for this example, they always are! the celsius value is converted to FAHRENHEIT in the setter function and stored in the _someVal property.
//When the temperature is requested using the temperature method it gets the FAHRENHEIT value from _someVal and performs the formula to return the value in CELSIUS to the user.

//The exercise is worded really shitty.
