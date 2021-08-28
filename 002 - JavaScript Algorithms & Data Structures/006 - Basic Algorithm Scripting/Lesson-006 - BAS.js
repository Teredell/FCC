//Lesson 006 - Confirm the Ending

function confirmEnding(str, target) {
  let targetRegex = new RegExp(target + "$", "g");
  let result = targetRegex.test(str);
  return result;
}

console.log(confirmEnding("Bastian", "n"));

//I had to google / learn about the new RegExp object but i wanted to solve this one using RegEx.
//Looking at the solutions, this was option 2, optioon 1 below.

function confirmEndingTwo(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  return str.slice(str.length - target.length) === target;
}

console.log(confirmEndingTwo("He has to give me a new name", "name"));

//Although I probably would have written it like this

function matVersion(str, target){
  let strPartToCheck = str.slice(str.length - target.length);
  console.log(strPartToCheck); //sanity check
  if(strPartToCheck == target){
    return true;
  } else{
    return false;
  }
  
}

console.log(matVersion("never gonna give you up", "up"));