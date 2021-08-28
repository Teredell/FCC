//Lesson 013 - Match Characters that Occur Zero or More Times

chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
c3poQuote = "He made a fair move. Screaming about it can't help you.";
hanQuote = "Let him have it. It's not wise to upset a Wookiee.";
// Only change code below this line
//let chewieRegex = /change/; // Change this line - This is how the line was oringially
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);

console.log(result); // Console will display Aaaaaaaaaaaaaaaa if correct

result = c3poQuote.match(chewieRegex);

console.log(result); // Console should display Null if correct, there is no Ax or Aaaa parts to this string 

result = hanQuote.match(chewieRegex);

console.log(result); // Console should display Null if correct, there is no Ax or Aaaa parts to this string