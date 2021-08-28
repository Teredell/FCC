//Lesson 020 - Combine an Array into a String Using the join Method

function sentensify(str) {
  // Only change code below this line
  let sentenceArray = str.split(/\W/);
  let sentence = sentenceArray.join(" ");
  return sentence;
  // Only change code above this line
}
console.log(sentensify("May-the-force-be-with-you"));
