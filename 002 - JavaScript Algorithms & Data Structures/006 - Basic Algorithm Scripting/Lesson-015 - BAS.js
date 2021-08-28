//Lesson 015 - Mutations

function mutation(arr) {
  let arrayTestingAgainst = arr[0].toLowerCase();
  let arrayTestingFor = arr[1].toLowerCase();
  
  for(let counter = 0; counter < arrayTestingFor.length; counter++){
    if(arrayTestingAgainst.indexOf(arrayTestingFor[counter]) < 0){
      console.log(arrayTestingFor[counter]);
    return false;
    }
  }
  return true;
}

console.log(mutation(["HEello", "helP"]));
