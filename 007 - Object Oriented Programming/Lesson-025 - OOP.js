//Lesson 025 - Understand the Immediately Invoked Function Expression (IIFE)

/*
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();*/
//Can be re-written as

(function() {
  console.log("A cozy nest is ready");
})();

//So it exectures as soon as it is written.