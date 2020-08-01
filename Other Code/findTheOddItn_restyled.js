function findOdd (A) {
  var newObj = {}
  for (let i = 0; i < A.length; i++) {
    if (newObj.prototype.hasOwnProperty.call(A[i])) {
      // Access the property and increase counter
      newObj[A[i]] = newObj[A[i]] + 1
    } else {
      // Add the property & counter
      newObj[A[i]] = 1
    }
  }
  // Now we have our object we need to test each one for modulo
  for (const item in newObj) {
    if (newObj[item] % 2) {
      const x = Number(item)
      return x
    }
  }
}

findOdd()
