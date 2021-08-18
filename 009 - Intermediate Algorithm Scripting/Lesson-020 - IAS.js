//Lesson 020 - Make a Person
//My code below for PersonTwo works, and all the tests show it works - yet not acceptted by FCC.
//FCC answer shown below at top.

var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person("Bob Ross");
bob.getFullName();


/****************************************************************************

var PersonTwo = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  var nameArr = firstAndLast.split(" ");
  var firstName = nameArr[0];
  var lastName = nameArr[1];
  var fullName = firstName.concat(" ", lastName);

  this.getFullName = function() {
    return fullName;
  };
    this.getFirstName = function() {
    return firstName;
  };
    this.getLastName = function() {
    return lastName;
  };
    this.setFirstName = function (first) {
      firstName = first;
      fullName = firstName.concat(" ", lastName);
      return firstName;
  };
      this.setLastName = function (last) {
      lastName = last;
      fullName = firstName.concat(" ", lastName);
      return lastName;
  };
      this.setFullName = function (firstAndLast) {
      nameArr = firstAndLast.split(" ");
      fullName = firstName.concat(" ", lastName);
      return fullName;
  };
};

var bob = new PersonTwo('Bob Ross');
console.log(bob.getFullName());

//tests
console.log("\nTests\n")
console.log(Object.keys(bob).length);
console.log(bob instanceof PersonTwo);
console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
console.log(bob.setFirstName("Haskell"));
console.log("below should read Haskell Ross");
console.log(bob.getFullName());
console.log(bob.setLastName("Curry"));
console.log(bob.getFullName());
console.log(bob.setFullName("Haskell Curry"));
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
********************************************************************************/
