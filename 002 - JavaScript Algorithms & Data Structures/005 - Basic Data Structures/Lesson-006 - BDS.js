//Lesson 006 - Add Items Using splice()

function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


//Testing if you can remove zero elements, lesson didn't say
let newArr = [0, 1, 2, 3, 4, 5, 6];
console.log(newArr);
newArr.splice(1, 0, 'Hello There, General Kenobi');
console.log(newArr);
//You can
