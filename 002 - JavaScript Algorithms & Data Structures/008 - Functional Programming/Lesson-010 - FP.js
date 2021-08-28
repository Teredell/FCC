//Lesson 010 - Implement the filter Method on a Prototype

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];
  for(let x = 0; x < this.length; x++){
    if(this[x] % 2 ==1){
    newArray.push(this[x]);

    }
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});


/*
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];
  for(let x = 0; x < this.length; x++){
    if(callback(this[x]) === true){
    newArray.push(this[x]);

    }
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
*/
