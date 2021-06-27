//Lesson 012 - Use Destructuring Assignment to Assign Variables from ObjectsPassed

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
//const highToday = HIGH_TEMPERATURES.today; //Before change
//const highTomorrow = HIGH_TEMPERATURES.tomorrow; //Before change

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;  //After changes
// Only change code above this line

console.log(highTomorrow);
console.log(highToday);