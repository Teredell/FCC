//Lesson 012 - Remove Elements from an Array Using slice Instead of splice

function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.slice(0,3);

  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));
