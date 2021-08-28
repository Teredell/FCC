//Lesson 008 - Truncate a String

function truncateString(str, num) {
  if(str.length <= num){
    return str;
  } else{
    let truncStr = str.slice(0, num);
    truncStr += "...";
    return truncStr;
  }
  
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//why do i always do my if statements in reverse?
