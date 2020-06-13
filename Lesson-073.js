//Lesson 73 - Selecting from Many Options with Switch Statements

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1:
      answer = "alpha";
      	break;
    case 2:
      answer =  "beta";
      	break;
    case 3:
      answer =  "gamma";
      	break;
    case 4:
    answer = "delta";
		break;
  }
  // Only change code above this line
  return answer;
}

console.log(caseInSwitch(1));

console.log(caseInSwitch(2));

console.log(caseInSwitch(3));

console.log(caseInSwitch(4));
