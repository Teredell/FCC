Have renamed my 2020 attempt at ES6 to OLD_Lesson-xxx
I've also blown away the no notes taken in this readme.
I'm still using the README in each section for notes about what each section teaches me, this will be no different.

lesson 1: mostly that using let over var will catch re-use errors

lesson 2: also that using let instead of var will cause the variable to have local scope rather than global which can cause issues.
(honestly, I'll use let, but people just need to use different variable names I think)

lesson 3: using const for variables that are read only - also use CAPS to name them

lesson 4: objects, arrays & functions can still be changed if declared by const, in that the elements can be altered.

lesson 5: Objects can be prevented from being able to be changed by using the .freeze method on them.
Addtionally, try & catch were introduced with no explaination in this lesson. further research required later.

lesson 6: Ok this is the lesson that seemed to stick in my memory becuase it changes how we've been doing things dramatically.
Writing functions like let someVar = function(){} can now be re-written as let someVar = () => {} 
For SIMPLE functions one can remove the return keyword and braces to make a single line function.
also the Date() inbuilt? function was introduced with no reference
also the "new" keyword was introduced with no explaination

lesson 7: writing these arrow functions can also have parameters in the parentheses, if only 1 parameter parentheses can be removed!
also the .concat method was introduced, with no explaination, I mean it is self-explainitory.
Perhaps random methods are just going to be scattered in from now on?

lesson 8: parameters can be given default values, if they are not set when function is executed the default will be used.
Fairly straightforward lesson!

lesson 9: This is where i got lost last time and gave up. it's partly worthwile to re-read my notes from the OLD lesson.
The short version is this: using (...args) makes sense, no worries. It makes an array of however many arguements/parameters are passed into the function.
introducing the .reduce method is the confusing part and reduce requires another function which they make immediately within calling .reduce as a arrow function.
reading and practicing how to use .reduce has shed some light on it, basically it allows for a mathematical function to be performed on all elements in 
an array i.e. add em all, subtract etc etc, it would seem if declared in line you need the starting value of zero as my test below did not require it.

lesson 10: Not to be confused with the rest parameter we learned in the last lesson, the spread parameter is used to expand an array out unlike the 
rest paramater which I find to be combining into one array. There are other methods that are useful to apply in conjunction with the SPREAD paramter, like the Math.max method as shown in the lesson.

lesson 11: Destructuring Assignment, given whats come before this is a change of "area of focus" it's like shorthand extracting values out of objects straight into new variables.

lesson 12: Very closely related to above, you can rename the variables produced by destructuring assignment by using this syntax.

lesson 13: Again related to above lesson, but this will get new variable names for values extracted out of nested objects.

lesson 14: It is not well explained how to get to solution code, I thought we were to be destructuring from an array but we are presented with 2 variables.
I even came up with a passing solution that was not the answer, which was frustrating.
Anyway this lesson "teaches" us that you can destructure values out of array and we can also use commas to reach the value in the array we want - if you read the lesson and not just the test.

lesson 15: When destructuring an array we can use the rest parameter to collect elements up to the end of the array. Apparently this function is similar to 
using .slice() but i've not used it yet. It is a bit limiting in that it must take everything to the end.

lesson 16: Sometimes some of the basics trip me up and the way this ends up being shows trips me up will I recognise that "half" is a function.
Once you know that and you know that stats has to be passed to half in order for it to work it makes sense.
if another object as passed that doesn't have those properties, it wouldn't work.
But if you know the properties, you can use this shortened method of destructuring during the function creation.

lesson 17: I solved this one to be the exact same as the help on my own! It can be done, just need to read thoroughly. We learned about backticks ` <--these and using ${variables} `

lesson 18: Well I can't believe I'm saying it, but in a weird way the lesson name says it all. It's a very concise way using ES6 to make objects. I should probably expand this one a little.

lesson 19: This lesson introduced the **this** keyword without any explaination. In addition I feel like it also just dropped in that objects can have funtions within them (maybe im tired and already knew that). Now we can make those function shorter and more concise with ES6 style, removing the word function basically.

lesson 20: This lesson has introduced classes & constructors and used the **this** keyword again. I will need to likely do more in depth analysis of contructors and classes beyond the scope of this hint file. In essesence (at the moment) it appears a class is a complex object which you pre-define what each object is going to contain with a constructor.
i.e. cars will all have # of wheels, # of doors, make and model
if we made a car class each time you made an object you would construct it with each of those.

lesson 21: See notes in .js file, basically the exercise is worded really poorly IMO and I had to decypher it into Mat language to understand what was going on with a relatively simple concept.

*_*_*_*_*_*_*_*_*_*_*_*_

LESSON 22 to 27 DO NOT WORK WITHOUT SERVER & FURTHER UNDERSTANDING IF YOU ARE TRYING TO JUST TRY IT OUT IN A LOCAL BROWSER

*_*_*_*_*_*_*_*_*_*_*_*_

lesson 22: Whoa HTML, I'm rusty! Anyway, this seems to be a precursor to what's going to be needed to bring JS into websites, looks interesting. 

lesson 23: replit.com doesn't seem to like the export function - I think I'll need to test this out on a dummy webpage or something else. Either way lesson makes sense, straight forward.

lesson 24: replit.com also does not like the import function. Testing on dummy webpage did not work, I need some further knowledge to implement using import / export. I'll also try on VS code at home and see if that works.

lesson 25: As above really, but for all functions from a file.

lesson 26: As above again. It's worth noting that by setting a default in a file of many functions it is the one that will be pulled out when importing.

lesson 27: Doesn't work as above, however this shows what lesson 26 sets up. set default and then import default which is done by removing curly braces in the import call.

lesson 28: Creating a promise, still learning about it.

lesson 29: seems to work like an if/else so far but obviously it's more about asynchronicity.

lesson 30: introduced the 'then' keyword fairly self explainitory in that if promise is fulfill then do what.

lesson 31: and lastly catch for catching errors with promises.
