Lesson 1: Create a basic JS object

Lesson 2: Access object properties with dot notation

Lesson 3: Create a method within the object

Lesson 4: Introduces the "this" method. In a method within the object use the term this, that way if the name of the object changes the method still works - Other uses for "this" exist, this is only 1 thing.

Lesson 5: Make a constructor function. So you can make multiple objects easily.

Lesson 6: Use the new keyword and the function created in lesson 5 to make a new object.

Lesson 7: Make to function able to recieve arguements so as each diferent instance of the object can be changed at initailization.

Lesson 8: there is a method called instanceOf, you can check if an object was created from an constructor or not.

Lesson 9: Seems a little redundant but understanding that each object has its own properties. created a for in loop to export them to an array.

Lesson 10: Introduces the prototype methodology, i like this. So you can establish a property  (that is changeable) for all objects created with it.

Lesson 11: Lesson 9 seems a little less redundant now, as there are different types of properties. own properties and prototype properties. (where prototype ones are made for all, just reiterating).

Lesson 12: In addition to lesson 8, which is better to use, wee can also check if an object has been made using the .constructor method which will return true or false.

Lesson 13: You can add multiple prototype items to the function in an object of it's own.

Lesson 14: following on from 13, HOWEVER do not forget to firstly set COnstructor: nameOfFunction - if you don't then testing if it's a constrcutor will fail.

Lesson 15: Some slight confusion here but you can check if an object is a prototypeOf, which seems to conflict with checking if it's been made using the constructporor hasOwnPorpoerties, but it's another way to check. It is a prototype of the object as a whole.

Lesson 16: So my above confusion is a little better understood after this lesson. beagle is a prototype of Dog and Dog is a prototype of Object - as in Object supercededs everything!

Lesson 17: This seems to be setting up for more parent/child object stuiff, but does not deliver properly. I understand where it's going but it should have delivered a working example.

Lesson 18: I think i know where this is going and it might be going the long way around, let see. Anyway using the new keyword is not the best way to create objects anymore, at least in this example, maybe its only with inheritance its not the best. Now we use let someObject = Object.crates(SuperObject.prototype);

Lesson 19: Ok, i think, awkwardly, it brought it together. create top level (or super type or parent) object, create next level down object and then do nextLelvelDownObject.prototype = Object.create(topLevelObject.prototype) to inherit the properties in the top level one. then you can create instances of the bottom level one that have the propertirs.

Lesson 20: After seting up this structure one needs to remember to change the constructor in each individual middle level object.

Lesson 21: feels like it's finally brining it all together, we can inherit from the animal and add to the dog.

Lesson 22: inherited methods can be overridden by defining them in the level you require, either at the very bottom level, eevie the dog or the Dog lewvel

Lesson 23: Methods can be created and added to unrelated objects, described as a Mixin.

Lesson 24: Might be approaching the limit of brain today, but closure looks good, if a little simple. It lets us store a private variable that can't be changed within an object - good for passwords and the liek

Lesson 25: Might as well finish off this section today - this IIFE looks like they doidnt have anothe rpalce forf it, so it's tacked on here. essentionally a created function invokes immediately.

Lesson 26: Another kind of addon but is related, you can create an imediately executed funstion that is an object with mixins (or not i guess) and have them available immedaiute;y top pass into other objects.