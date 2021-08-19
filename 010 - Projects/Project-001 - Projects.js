//Project 001 - Palindrome Checker
console.log("Project 1 - Palindrome Checker");

function palindrome(str) {
  let strippedStr = str.toLowerCase().replace(/[^0-9a-zA-Z]/g, "");
  console.log(strippedStr);
  //firstly we have to remove all the non-alphanumerics
  //will use a regex i think its /\W or something
  let strippedArray = strippedStr.split("");
  //console.log(strippedArray);
  let reverseStrippedArray = [];
  //then i think maybe split into an array
  //then a backwards loop like i = arr.length and i--?
  for(let i = (strippedArray.length -1); i >= 0; i--){
    reverseStrippedArray.push(strippedArray[i]);
  }
  //console.log(reverseStrippedArray);
  //then join them both and compare strict
  let reverseStr = reverseStrippedArray.join('');
  console.log(reverseStr);
  if(strippedStr === reverseStr){
      console.log(true);
    return true;
  }else{
    console.log(false);
    return false;
  }
  
}


palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("A man, a plan, a canal. Panama");
palindrome("nope");
