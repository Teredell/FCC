//Lesson 011 - Title Case a Sentence

function titleCase(str) {
  str = str.toLowerCase();
  //console.log(str); //Sanity Check
  let strArray = str.split(' ');
  //console.log(strArray);//Sanity Check
  for(let i = 0; i < strArray.length; i++){
    strArray[i] = strArray[i].replace(strArray[i].charAt(0), strArray[i].charAt(0).toUpperCase());
  }
  //console.log(strArray);//Sanity Check
  str = strArray.join(' ');
  //console.log(str);//Sanity Check
  return str;
}

console.log(titleCase("I'm a little tea pot"));
