//Lesson 006 - Refactor Global Variables Out of Functions

// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (someList, bookName) {
  var newBookList = [...someList];
  newBookList.push(bookName);
  return newBookList;
  
  // Change code above this line
}

// Change code below this line
function remove (someList, bookName) {
  var book_index = someList.indexOf(bookName);
  if (book_index >= 0) {
    var newBookList = [...someList];
    newBookList.splice(book_index, 1);
    return newBookList;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
//console.log(bookList);
//console.log(newBookList);
//console.log("\nwait");

var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
//console.log(bookList);
//console.log(newerBookList);
//console.log("\nwait");

var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
//console.log(newestBookList);
