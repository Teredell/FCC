//Lesson 108 - Use Multiple Conditional (Ternary) Operators

function checkSign(num) {
  return (num === 0) ? "zero"
  : (num < 0) ? "negative"
  : "positive";
}

console.log(checkSign(10));

console.log(checkSign(-10));

console.log(checkSign(0));