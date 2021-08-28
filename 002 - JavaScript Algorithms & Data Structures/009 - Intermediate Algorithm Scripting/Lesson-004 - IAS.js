//Lesson 004 - Wherefore art thou

function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);
  return collection.filter(function(obj) {
    return srcKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}



/*
//The below straight up doesnt workl and ive fucked with it for a few hours now.
function whatIsInAName(collection, source) {
  var arr = [];
  var sourceKeys = Object.keys(source);
  var sourceValues = Object.values(source);
  console.log(sourceKeys);
  // Only change code below this line
  for(let i = 0; i < collection.length; i++){
    console.log(collection[i]);
    console.log(source);
    if(collection[i].hasOwnProperty(sourceKeys[i])){
      console.log("im here");
      console.log(collection[i][sourceKeys[i]]);
      for(let j = 0; j < sourceKeys.length; j++){
        console.log("im here now");
        console.log(collection[i][sourceKeys[i]]);
        console.log(sourceValues[j]);
        if(collection[i][sourceKeys[i]] == sourceValues[j]){
          console.log(collection[i][sourceKeys] + " will be added");
          arr.push(collection[i]);
        }
      }
    }
  }
  console.log(arr);
  // Only change code above this line
  return arr;
}

//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
*/
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));