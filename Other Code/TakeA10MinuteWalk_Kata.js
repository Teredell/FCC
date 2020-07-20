/* You live in the city of Cartesia where all roads are laid out in a perfect grid.
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
The city provides its citizens with a Walk Generating App on their phones --
everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block,
so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!)
and will, of course, return you to your starting point. Return false otherwise.

 Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
   It will never give you an empty array (that's not a walk, that's standing still!).
*/

var walk = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']

function isValidWalk (walk) {
  // Work out with if statement if length of walk is 10 minutes
  if (walk.length === 10) {
    // Establish home "coordinates"
    var location = [0, 0]
    // Loop through 10 long array and update location
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n':
          location[0] += 1
          break
        case 's':
          location[0] -= 1
          break
        case 'w':
          location[1] -= 1
          break
        case 'e':
          location[1] += 1
          break
      }
    }
    // If not 10 moves long then does not fit criteria
  } else {
    return false
  }
  // If we end up back at 0, 0 then we are home
  if (location[0] === 0 && location[1] === 0) {
    return true
  } else {
    return false
  }
}

console.log(isValidWalk(walk))

/* other cases to test: var fail =
  [
    ['n'],
    ['n','s'],
    ['n','s','n','s','n','s','n','s','n','s','n','s'],
    ['n','s','e','w','n','s','e','w','n','s','e','w','n','s','e','w'],
    ['n','s','n','s','n','s','n','s','n','n'],
    ['e','e','e','w','n','s','n','s','e','w'],
    ['n','e','n','e','n','e','n','e','n','e'],
    ['n','w','n','w','n','w','n','w','n','w'],
    ['e','s','e','s','e','s','e','s','e','s'],
    ['w','s','w','s','w','s','w','s','w','s']
  ];
var pass =
  [
    ['n','s','n','s','n','s','n','s','n','s'],
    ['e','w','e','w','n','s','n','s','e','w'],
    ['n','s','e','w','n','s','e','w','n','s']
  ];
  */
