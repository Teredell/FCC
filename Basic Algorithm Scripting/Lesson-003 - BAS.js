//Lesson 003 - Factorialize a Number

function factorialize(num) {
  for(var product = 1; num > 0; num--){
    product *= num;
    }
  return product;
}

console.log(factorialize(5));

//I attempted multiple different approaches to this, without cracking it. but at some point you need to look at the answer and move on. I understand it and maybe i'm having an off day.
//I did learn you can iterate with a different variable than the one set in the for loop.
//Additionally this exercise can be solved with recursion, which i am still uncomfortable with but i have read through it and understand it also.
