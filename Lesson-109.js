//Lesson 109 - Use Recursion to Create a Countdown

// Only change code below this line
function countdown(n){
  if(n < 1){
    return [];
  }else{
    const arr = countdown(n -1);
    arr.unshift(n);
    return arr;
  }
}
// Only change code above this line

console.log(countdown(11));
