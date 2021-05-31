//Lesson 006 - Find More Than the First MatchPassed

let twinkleStar = "Twinkle, twinkle, little star";
//let starRegex = /change/; // Change this line - This is how the line was oringially
let starRegex = /twinkle/gi; // Change this line
//let result = twinkleStar; // Change this line - This is how the line was oringially
let result = twinkleStar.match(starRegex); // Change this line

console.log(result); // console should display [ 'Twinkle', 'twinkle' ] if correct
