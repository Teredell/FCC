//Lesson 72 - Golf Code

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (par === 1 || strokes === 1){
    return names[0];
  }else if (strokes - par <= -2 ){
    return names[1];
  }else if (strokes - par == -1 ){
    return names[2];
  }else if (strokes - par == 0 ){
    return names[3];
  }else if (strokes - par == 1 ){
    return names[4];
  }else if (strokes - par == 2 ){
    return names[5];
  }else if (strokes - par >= 3 ){
    return names[6];
  }

  return "Change Me";
  // Only change code above this line
}

console.log(golfScore(4, 1));

console.log(golfScore(4, 2));

console.log(golfScore(4, 3));

console.log(golfScore(5, 5));

console.log(golfScore(5, 6));

console.log(golfScore(4, 6));

console.log(golfScore(4, 8));

console.log(golfScore(5, "string"));