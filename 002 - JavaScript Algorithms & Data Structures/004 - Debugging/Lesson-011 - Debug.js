//Lesson 011 - Use Caution When Reinitializing Variables Inside a Loop

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  //let row = []; //this was the incorrect place to initalize this
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    let row = []; //This is correct
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
      }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix); //Per the problem, the row should be initialized in the outer loop, not outside of the whole loop.
