//Lesson 010 - Boo who

function booWho(bool) {
  if(bool === true || bool === false){
    return true;
  } else {
    return false;
  }
}

console.log(booWho(null));
console.log(booWho(false));

//After looking at the solution, i was supposed to use the typeof method.

function booWhoTakeTwo(boolTwo){
  if(typeof boolTwo == "boolean"){
    return true;
  } else{
    return false;
  }
}

console.log(booWhoTakeTwo(null));
console.log(booWhoTakeTwo(true));
