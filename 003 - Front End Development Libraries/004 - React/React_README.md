Notes from 05/09/21
The set-up for React was hectic!
here's some scattered notes about it.

You need to update/install node and npm on yoiur local machine.
You need to npm install react using, get this, npx create-react-app nameOfApp
npx is not a typo
cd to the folder
and then npm start

This loads your blank project in the browser.
Now we have 50 million files and folders in the IDE, yay. 

Initially i thought to do these exercises in index.js, but multiple lessons will require many many more files as we would have to spin up a whole set of files for each one, that's cumbersome.
So i deleted/commented out  what editing i did to index.js and went googling about making multi-page react apps, that is not as simple as it sounds.

I copied and edited with some difficulty a way to do this so that with each lesson you have to do the following to make it show up as a "route" on the website.
made components folder.
create new lesson, do lesson. Note previously everything was inside the return, I have moved the lesson work into the constant and am returning it.
then add a list element to landing.jsx copying the format
then add an export line to index.js WITHIN THE COMPONENTS FOLDER
the add the method name to the import at the top of App.js & create a route line copying format.

Notes from 06/09/21
While i'm at work it's going to be very hard to re-do what i set-up at home on VS code on repl.it, vis-a-vis time between calls and such.
I'm going to keep studying but i'll set-up another staging folder so i can keep doing lessons on FCC and commits on github and then i'll hopefully be able to combine these on the weekend or after work into a cohesive site/lesson area.


Now onto lesson notes.....
Lesson 1 - You're basically always creating a function that returns a div
Lesson 2 - Shows that you can return a div with other divs of elements nested within it
Lesson 3 - How to do a JSX comment {/*here*/}
Lesson 4 - this one was a bit tricky, and i wanted to show where it should be. I made a div on the PUBLIC index.html so i could render to it.
All the other elements reder through the app.js so this one sticks out, sorry OCD
Lesson 5 - Demonstrates that classNames in React are camelCase as they conflict with html as do everal other things
Lesson 6 - Demonstrates that using JSX can eliminate closing tags for some elements by using <div />, however currently i find this a little confusing, i like having the closing tags
Lesson 7 - Was a little redundant in that io had already had to work out how to do this in setting up the VS code stuff

I had a break and was a little slack with the notes, i'll try update some here.

Lesson 8 - Moving from the function mehod of creating an div to now using extends react.component method.
Lesson 9 - Introducing parent / child elements
Lesson 10 - Creating a list and using as a child element to bring into parent
Lesson 11 - Bringing 2 children in under a parent
Lesson 12 - Some lessons are showing me how to render directly to the DOM so are hard to replicate here, this is one.
Lesson 13 - Introduced the Constructor(props) Super(Props) thing
Lesson 14 - Accessing props (also using JS method of Date)
Lesson 15 - Accessing arrays and joining

At this point I altered the Landing page and learned how to implement bootstrap into react on my own.
Note the imports at the top of landing.jsx

Lesson 16 - Introduced the defaultProps setting up of an element
Lesson 17 - npm install --save prop-types --> setting default properties
Lesson 18 - Setting default type for property
Lesson 19 - Using "this" to access property
Lesson 20 - Using PropTypes to restrict a property type to the desired type.
Lesson 21 - Stateful component - setting a state in the super area
Lesson 22 - creating a variable in the render section to access the state item in the html
lesson 23 - showing a state change in a website using a click
lesson 24 - need to re-visit but "binding" the click using "this".
Lesson 25 - More binding of the click action in the constructor block, but outside of super. It is also showing my that writing "JS programs" between the constructor block and the render section is maybe how things get "dynamically" changed i.e. you click and it executes and changes.
Lesson 26 - A bit more of the above but with a counter. What i had trouble with was accessing the property, state.property mate and you're there.
Lesson 27 - Controlled input, made a method to update state.input and learned an "event handler" can just be a NO METHOD property in a html tag that calls a piece of code. i.e. <div eventHandler={this.someMethod}>