//Lesson 006 - Use Arrow Functions to Write Concise Anonymous Functions

//initial presentation of lesson
var magic = function() {
  return new Date();
};

console.log(magic()); //testing function before making chnages

//Level 2 of the lesson

const newMagic = () => {
  return new Date();
}

console.log(newMagic()); //parentheses moved to before word function and word function replaced by =>

//Level 3 of the lesson 

const strangeMagic = () => new Date();

console.log(strangeMagic()); //above but also return keyword & curly braces removed