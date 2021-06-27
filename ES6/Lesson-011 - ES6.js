//Lesson 011 - Use Destructuring Assignment to Extract Values from Objects

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

//const today = HIGH_TEMPERATURES.today; //Before changes
//const tomorrow = HIGH_TEMPERATURES.tomorrow; //Before changes

const {today, tomorrow} = HIGH_TEMPERATURES;

// Only change code above this line

console.log(today);

console.log(tomorrow);