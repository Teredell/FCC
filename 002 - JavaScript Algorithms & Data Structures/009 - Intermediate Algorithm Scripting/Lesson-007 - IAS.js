//Lesson 007 - Search and Replace

function myReplace(str, before, after) {
  //i can compare the uppercase of before and after before searching and inserting
  let capRegex = /^[A-Z]/;
  var capAfter = "";
  let searchRegex = new RegExp(before, 'g');
  let beforeTest = capRegex.test(before); //is first letter of before a capital
  let afterTest = capRegex.test(after); //is first letter of after a capital
  if(beforeTest == true && afterTest == false){
    //console.log("I'm here");
    capAfter = after.charAt(0).toUpperCase() + after.slice(1);
    //console.log(capAfter);
    return str.replace(searchRegex, capAfter);
  } else if(beforeTest == false && afterTest == true){
    capAfter = after.charAt(0).toLowerCase() + after.slice(1);
    return str.replace(searchRegex, capAfter);
  }else{
  return str.replace(searchRegex, after);
  }
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
