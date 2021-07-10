//Lesson 007 - Copy Array Items Using slice()

function forecast(arr) {
  // Only change code below this line
  arr = arr.slice(2, 4);
  return arr;
  //Alternatively could just do: return arr.slice(2, 4);
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
