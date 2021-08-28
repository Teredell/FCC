//Lesson 021 - Apply Functional Programming to Convert Strings to URL Slugs

// Only change code below this line
function urlSlug(title) {
  let newTitle = title.toLowerCase().trim();
  let titleArray = newTitle.split(/\s+/);
  let slugifiedTitle = titleArray.join("-");
return slugifiedTitle;
}
// Only change code above this line

console.log(urlSlug(" Winter Is  Coming"));
