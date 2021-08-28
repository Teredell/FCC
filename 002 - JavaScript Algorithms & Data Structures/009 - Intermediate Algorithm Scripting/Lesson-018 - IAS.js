//Lesson 018 - Everything Be True

function truthCheck(collection, pre) {
  let myBool = null;
  for(let i = 0; i < collection.length; i++){
    //Just checking i can access the collection and key
    console.log(collection[i][pre]);
    //Check if "Truthy", if yes, continue 
    if(collection[i][pre]){ 
      myBool = true;
    //If not, stop.  
    }else{
      myBool = false;
      break;
    }
  }
  //sanity check result
  console.log(myBool);
  return myBool;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
