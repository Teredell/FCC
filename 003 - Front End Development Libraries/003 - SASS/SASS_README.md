Setting up in VS code at first was difficult, but eventually i simple NPM install did the trick, i should heed this for future reference.

Lesson 1 (redux) - You can use variables in SCSS, which saves time on repeating color codes all through the sheet.

Lesson 2 - You can nest code within braces making parent-child relationships.

Lesson 3 - mixins in scss are akin to functions in JS. You set it up with:
@mixin mixin-name(params, params){instructions};
and then re-use it by calling it with @include mixin-name(params)

Lesson 4 - within mixins we can also do if and else if statments, just 2 things to note. 1. @if or @else if & 2. no parentheses around condition i.e. if 1 == 1 {instructions} instead of JS way of: if(1 == 1){instructions}

Lesson 5 - it is also possible to create for loops, there are some different pieces of syntax such as "through" and also #{$x} the hash is required! using "through" instead of "to" likely seems an issue around zero based indexing.

Lesson 6 - instead of a for loop you can loop through using each and also use the $key - there are 2 ways for this lesson $key method used

Lesson 7 - The ability to use a while loop is also possible

Lesson 8 - Can import from files with _atTheStart.scss, took a little to set-up but follow example.

Lesson 9 - You can extend predefined sets of properties and addonto them using the @extend method