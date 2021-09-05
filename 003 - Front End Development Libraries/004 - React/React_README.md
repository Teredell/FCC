The set-up for React was hectic!
here's some scattered notes about it.

You need to update/install node and npm on yoiur local machine.
You need to npm install react using, get this, npx create-react-app nameOfApp
npx is not a typo
cd to the folder
and then npm start

This loads your blank project in the browser.
Now we have 50 million files and folders in the ide, yay. 

Initially i thought to do these exercises in index.js, but mulytiple lessons will require many many more files as we would have to spin up a whole set of files for each one, that's cumbersome.
So i deleted/commented out  what editing i did to index.js and went googling about making multi-page react apps, that is not as simple as it sounds.

I copied and edited with some difficulty a way to do this so that with each lesson you have to do the following to make it show up as a "route" on the website.
made components folder.
create new lesson, do lesson. Note previously everything was inside the return, i have moved the lesson work into the constant and am returning it.
then add a list element to landing.jsx copying the format
then add an export line to index.js WITHIN THE COMPONENTS FOLDER
the add the method name to the import at the top of App.js & create a route line copying format.

Now onto lesson notes.....
Lesson 1 - You're basically always creating a function that returns a div
Lesson 2 - Shows that you can return a div with other divs of elements nested within it
Lesson 3 - How to do a JSX comment {/*here*/}
Lesson 4 - this one was a bit tricky, and i wanted to show where it should be. I made a div on the PUBLIC index.html so i could render to it.
All the other elements reder through the app.js so this one sticks out, sorry OCD
Lesson 5 - Demonstrates that classNames in React are camelCase as they conflict with html as do everal other things
Lesson 6 - Demonstrates that using JSX can eliminate closing tags for some elements by using <div />, however currently i find this a little confusing, i like having the closing tags
Lesson 7 - 