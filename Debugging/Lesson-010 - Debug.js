//Lesson 010 - Catch Off By One Errors When Using Indexing

function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
//for (let i = 1; i <= len; i++) { //Line before fixing
  for (let i = 0; i < len; i++) { //Line after fixing
  // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive(); //Will display 1, 2, 3, 4, 5 if correct
