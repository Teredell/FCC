//Lesson 003 - Seek and Destroy

function destroyer(arr, ...args) {
  //console.log(args.length);
  let newArr = args.slice();
  //console.log(newArr);
  let returnArr = arr.filter(eachElement => !newArr.includes(eachElement));
  //console.log(returnArr);
  return returnArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));

function dest(someArr){
  let otherArguements = Array.from(arguments).slice(1);
  console.log(otherArguements);
}
dest(["tree", "hamburger", 53], "tree", 53);