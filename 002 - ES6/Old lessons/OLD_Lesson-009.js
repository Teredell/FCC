//Lesson 9 - Use the Rest Parameter with Function Parameters

const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}

/* 
There is alot to take in for this lesson.
It's also been a little while since I looked at ES6 properly again, so lets unpack.
the above code's lesson solution is below. *Changed to sumNew*
*/
const sumNew = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

/*
In my mind this is what happens
first we've learned that ...args means any number of arguments can go into this funciton
they are stored in an imaginary array. Then we learned .reduce means an operation is performed on each arg in the array
then another function is made with the => which tells reduce to add each element.
This is where i got a bit confused, but the reduce method requires a & b in a function, 
which are total and current value, see https://www.w3schools.com/jsref/jsref_reduce.asp - so these can be replaced with just 2 variables.
so a (total) plus b (current value) and i guess b iterates thru the array, ading to a(total) every time
and lastly it starts at 0, which is required for reduce.
then returns it all
*/

console.log(sumNew(1, 2, 3, 4, 5, 6));

/*
Also mentioned but not used, i guess i'll have to check them out more
.map() and .filter()
I think this lesson is where i really started having problems with ES6, so much is assumed.
*/ 
