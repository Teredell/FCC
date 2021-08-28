//Lesson 13 - Falsy Bouncer

function bouncer(arr) {
  let filteredArray = [];
  for(let x = 0; x < arr.length; x++){
    if(arr[x]){
      //console.log("I'm here"); //Sanity check
      filteredArray.push(arr[x]);
    }
  }
  return filteredArray;
}

console.log(bouncer([7, "ate", "", false, 9]));
