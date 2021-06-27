//Lesson 016 - Use Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
//const half = (stats) => (stats.max + stats.min) / 2.0; //Before changes
const half = ({max, min}) => (max+min) / 2.0; //After changes
// Only change code above this line

console.log(half(stats));
//makes way more sense seeing it operate in the console.log above.