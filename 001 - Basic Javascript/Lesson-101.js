//Lesson 101 - Profile Lookup

// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
    // Only change code below this line
    for(var i = 0;i < contacts.length; i++){
        if(contacts[i]["firstName"] == name){
            //passed name test
            //if this fails, exit loop and return no contact found
            if(contacts[i].hasOwnProperty(prop)){
                //both conditions have now passed, return the value of prop
                return contacts[i][prop];
            }else{
                //if the prop test failed, but the name test didn't return that there's no property matching.
                return "No such property";
                }
        }

    }
    //for loop has ended and the name test did not pass. Contact not found.
    return "No such contact";
    // Only change code above this line
}    
    console.log(lookUpProfile("Akira", "likes"));
    console.log(lookUpProfile("Kristian", "lastName"));
    console.log(lookUpProfile("Sherlock", "likes"));
    

    //Note to future self, the order of testing was so important for this one. Keep it in mind