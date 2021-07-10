//Lesson 023 - Use export to Share a Code Block

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export { lowercaseString };
export {uppercaseString};
//export {uppercaseString, lowercaseString}; will also work

/*FOR SOME REASON USING EXPORT THROWS AN ERROR ON REPLIT*/

//Below is not the point of this exercise
let someString = "make this uppercase";
console.log(uppercaseString(someString));
