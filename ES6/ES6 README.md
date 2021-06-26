Have renamed my 2020 attempt at ES6 to OLD_Lesson-xxx
I've also blown away the no notes taken in this readme.
I'm still using the README in each section for notes about what each section teaches me, this will be no different.

lesson 1: mostly that using let over var will catch re-use errors

lesson 2: also that using let instead of var will cause the variable to have local scope rather than global which can cause issues.
(honestly, i'll use let, but people just need to use different variable names i think)

lesson 3: using const for variables that are read only - also use CAPS to name them

lesson 4: objects, arrays & functions can still be changed if declared by const, in that the elements can be altered.

lesson 5: OBjects can be prevented from being able to be chnaged by using the .freeze method on them.
Addtionally, try & catch were introduced with no explaination in this lesson. further research required later.

lesson 6: Ok this is the lesson that seemed to stick in my memory becuase it changes how we've been doing things dramatically.
Writing functions like let someVar = function(){} can now be re-written as let someVar = () => {} 
For SIMPLE functions one can remove the return keyword and braces to make a sinfgle line function.
also the Date() inbuilt? function was introduced with no reference
also the "new" keyword was introduced with no explaination

lesson 7: writing these arrow functions can also have parameters in the parentheses, if only 1 parameter parentheses can be removed!
also the .concat method was introduced, with no explaination, I mean it is self-explainitory.
Perhaps random methods are just going to be scattered in from now on?

lesson 8: parameters can be given default values, if they are not set when function is executed the default will be used.
Fairly straightforward lesson!

lesson 9: This is where i got lost last time and gave up. it's partly worthwile to re-read my notes from the OLD lesson.
The short version is this: using (...args) makes sense, no worries. It makes an array of how ever many arguements/paraeters are passed into the function.
introducing the .reduce method is the confusing part and reduce requires another function which they make immediatelt within calling .reduce as a arrow function.
reading and practicing how to use .reduce has shed some light on it, basically it allows for a mathematical function to be performed on all elements in 
an array i.e. add em all, subtract etc etc, it would seem if declared in line you need the starting value of zero as my test below did not require it.