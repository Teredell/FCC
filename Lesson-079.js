//Lesson 79 - Counting Cards

var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
      if (count > 0){
        return count + " Bet";
      }else if(count <= 0){
        return count + " Hold";
      }
  return "Change Me";
  // Only change code above this line
}

cc(3);  cc(4); cc(5); cc(2); cc(6);
console.log(cc());
count = 0; //Reset for next test

cc(10);  cc("J"); cc("Q"); cc("K"); cc("A");
console.log(cc());
count = 0; //Reset for next test

cc(7);  cc(8); cc(9);
console.log(cc());
count = 0; //Reset for next test

cc(3);  cc(2); cc("A"); cc(10); cc("K");
console.log(cc());
count = 0; //Reset for next test