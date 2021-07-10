//Lesson 018 - Iterate Through the Keys of an Object with a for...in Statement

let someUsers = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  let counter = 0;
  for(let userName in usersObj){
      //console.log(userName); //Just me checking
      if(usersObj[userName].online == true){
        //console.log('I\'m here'); //also checking
        counter++;
      }
  }
  return counter;
  // Only change code above this line
}

console.log(countOnline(someUsers));
