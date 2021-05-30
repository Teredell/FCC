// Lesson 003 - Match a Literal String with Different Possibilities

let petString = "James has a pet cat.";
//let petRegex = /change/; // Change this line - This is how the line was oringially
let petRegex = /dog|cat|bird|fish/; // This is the answer
let result = petRegex.test(petString);

console.log(result); //if above worked console should show True.