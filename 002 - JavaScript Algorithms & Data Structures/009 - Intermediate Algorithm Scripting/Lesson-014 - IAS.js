//Lesson 014 - Smallest Common Multiple

function smallestCommons(arr) {
//First i need to get the Greatest Common Divisor
function gcd(a, b){
  while(a > 0 && b > 0){
    if(a > b){
      a = a % b;
    }else if(b > a){
      b = b % a;
    }else{
      console.log("why am i running?");
    }
  }
  if(a > b){
    return a;
    }else{
      return b;
    }
}
//Now we can get the G.C.D, we need to be able to work out the Least Common Multiple of 2 numbers
function lcm(c, d){
  let theGCD = gcd(c, d);
  let result = 0;
  if(c >= d){
    result = (c / theGCD) * d;
  }else{
    result = (d / theGCD) * c;
  }
return result;
}
//Now we can work out the G.C.D & L.C.M, we need to sort the incoming array so lowest is first
const newSortArray = arr.sort(function(newA, newB){return newA - newB});
//Now I need an array with all the numbers between my sorted array filled in.
var filledArray = [];
for(let j = newSortArray[0]; j <= newSortArray[1]; j++){
  filledArray.push(j);
}
//This is the last step that i need practice with!
//Reduce takes an array and performs a function on each element "reducing" it to one number/thing
//i could have put *** arr.reduce(a, b) => lcm(a, b)); *** but i visually wanted a little more demonstration
let smallestCommonMultiple = filledArray.reduce((filledArrayElementA, filledArrayElementB) => lcm(filledArrayElementA, filledArrayElementB));
//Output answer to console
console.log(smallestCommonMultiple + " is the answer");
//return answer
return smallestCommonMultiple;
}

//Tests
smallestCommons([1, 5]);
smallestCommons([5, 1]);
smallestCommons([2, 10]);
smallestCommons([1, 13]);
smallestCommons([23,18]);