//Lesson 024 - Use Closure to Protect Properties Within an Object from Being Modified Externally

function Bird() {
  let weight = 15;
  this.getWeight = function(){
    return weight;
  };

}

let tweetie = new Bird();

console.log(tweetie.getWeight());

tweetie.weight = 20; //Does not change the weight

console.log(tweetie.getWeight());
