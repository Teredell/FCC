//Lesson 017 - Create Strings using Template Literals

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];                                          //This was the original line
  for(let i = 0; i < arr.length; i++){                              //This line was added
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`)    //This line was added
  };                                                                //This line was added
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

console.log(failuresList); //Will display array as requested in lesson
