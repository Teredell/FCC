//Lesson 014 - Smallest Common Multiple
console.log("\nLesson 14");

function smallestCommons(arr) {
//first i need to get the G.C.D
//this will need the modulo method
//i will need to sort highest lowest
//i may need a helper function so i can break things up
const sortedArray = [...arr];
console.log(sortedArray);
sortedArray.sort(function(newA, newB){return newA - newB});
console.log(sortedArray + " im here");
var newArr = [sortedArray[0]];
console.log(newArr);
var bottom = sortedArray[0];
console.log(bottom);
for(let i =sortedArray[0]; i < sortedArray[1]; i++){
  bottom +=1;
  newArr.push(bottom);
}
console.log("newAr = " + newArr);

//above can be condensed alot!! but i've got my array now.

something = newArr.reduce((someVarNEwOne, someVarNewTwo) => lcm(someVarNEwOne, someVarNewTwo));

console.log(something + " is the answer");
  //return arr;
}


smallestCommons([1,5]);


let testNum = 48;
let testNumTwo = 18;
var theTest = true;


function gcd(a, b){
  while(a > 0 && b > 0){
    if(a > b){
      a = a % b;
      //console.log(a + " value of a");
      //console.log(b + " value of b");
      //loops++;
    }else if(b > a){
      b = b % a;
      //console.log(a + " value of a(else run)");
      //console.log(b + " value of b");
      //loops++;
    }else{
      console.log("why am i running?");
      //loops++;
    }
  }

//console.log("final value of a = " + a);
//console.log("final value of b = " + b);
if(a > b){
  return a;
}
else{
  return b;
}
}

console.log(gcd(testNum, testNumTwo));

function lcm(c, d){
  let theGCD = gcd(c, d);
  //console.log("I'm working " + theGCD);
  let result = 0;
  if(c >= d){
    result = (c / theGCD) * d;
  }else{
    result = (d / theGCD) * c;
  }
console.log(result);
return result;
}

lcm(testNum, testNumTwo);