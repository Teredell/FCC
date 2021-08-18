//Lesson 021 - Map the Debris

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  function time(x){
    return Math.round(2*Math.PI*(Math.sqrt((Math.pow((earthRadius + x), 3))/GM)));
  }

  //console.log(time);
  let returnArray = [];
  for(let i = 0; i < arr.length; i++){
    let pushObj = {};
    pushObj["name"] = arr[i].name;
    pushObj["orbitalPeriod"] = time(arr[i].avgAlt);
    returnArray.push(pushObj);
  }
  //console.log(returnArray);
  return returnArray;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
