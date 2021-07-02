//Lesson 029 - Complete a Promise with resolve and reject

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer = true; 
    
  if(responseFromServer) {
    // Change this line
    resolve("We got the data");
    console.log("set server request to True for this exercise");
  } else {  
    // Change this line
    reject("Data not received");
  }
});
