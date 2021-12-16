Lesson 1: Looks like these lessons are going to require lots of reading and consideration - I worked out the answer very quickly and the actual implementing of my bit of code was 2 seconds, but I had to understand everything going on before I did that 2 seconds.

Lesson 2: Wow, alot more reading again. Functions can be passed into or returned from other functions. Functions that do this are called higher order functions. Functions that are passed in or returned from are called Lambda.
The getTea in this instance is the higher order function and prepareGreenTea or prepareBlackTea are the Lambdas.
Again, worked out the answer and implemented my bit in 2 seconds, but had to understand everthing else first

Lesson 3: Hola! this is still very heady lots of conceptual thinking going into these exercises! After refreshing myself on how splice() works I thought the + 1 needed removing, but then eventually I figured out that running the splice a second time after the array had been changed by the first splice was causing the error. Once the beforeTabsIndex runs you want to take all the tabs after the current index, which is **NOW** index 0. So by changing the value in the afterTabsIndex from index + 1 to just 1, which will **NOW** be the tab after zeroth tab.

Lesson 4: Again very wordy, but this one has by far been the easiest. Because I'm returning a value of fixed+1 in my function, fixedValue isn't changing. This concept seems relatively easily understood but the point was to not make changes to variables.

Lesson 5: I have a slight issue with the way this exercise plays out. If I write incrementer(fixedValue){} I could still pass anyOtherValue into the function. It seems better to write it as just value as shown in the help, but it's a little off. Again, I understand but this exercise might be a little off on wording.

Lesson 6: I keep forgetting you can't copy an array, you have to use the spread operator. Aside from reminding myself of that I solved without the help. Made sense.

Lesson 7: OK, so we finally encountered the .map method. I had to do a little homework and made it work without looking at the help again! Although I should definitely practice map alot more, I'm sure it will come up.

Lesson 8: READ THE FUCKING QUESTION. Array can be accessed using *this*, which would have saved some time. Aside from that all I did was create a for loop.

Lesson 9: Well I solved this correctly I just did the parseFloat in the .map & not the .filter & FCC wouldn't pass me. I have put the FCC approved solution at the bottom. Incidentally I learned about .filter!!

Lesson 10: Was missing the question! Very similar to lesson 8 in format so was exceptionally easy to solve. After pausing to review the help and check, I have provided another solution as it appears I may be missing the point. The point is whether something is true or false, not whether it returns a remainder

Lesson 11: Relatively simple, create a function that uses .slice(), not sure what happened there.

Lesson 12: Also straightforward, the point they are driving home is to not mutate stuff, EVER. So using sPlice is bad but you can sometimes achieve the same thing using slice, which returns a new array, not mutate the one you're working on.

Lesson 13: concat!!!! finally a lesson on concat, I've had to google it's use before now anyway, but it's nice to see it here.

Lesson 14: In the spirit of not changing things with functional programming, the use of the .push method is also discouraged, using concat is favoured. The exercise shows.

Lesson 15: This took some doing, I definitely need more practice with .reduce and filter and map.  But reduce seems to be lauded all over the internet so maybe an area of focus.

Lesson 16: This exercise did serve as good practice actually, I was mostly good to solve without the help which was more of a check than anything

Lesson 17: Is a departure from reduce, filter & map finally. Now looking into .sort() - alphabetical is not as simple as I had hoped, you need to compare char values.

Lesson 18: Same as 17 but non-mutating

Lesson 19: Change of tack, now learned about the .split() method, which I've had to google before now.

Lesson 20: and now using the .join() method to bring things back together, which I'm sure I've also had to google. Surprise re-emergence of REGEX.

Lesson 21: A little frustrated I didn't read the question, I went and sought out whitespace removal from a previous exercise in regex, to then beat the challenge and find I wasn't allowed to use replace. INSTEAD I have to use .trim() which I haven't been shown yet in the answers!

Lesson 22: I got it without the help, I'm just going about things the long way still, like making a variable to return instead of returning directly. But it makes more sense the way I'm doing it for now. This exercise was learning the .every() method

Lesson 23: Very similar to above lessone but for the .some method

Lesson 24: I must admit this one left me scratching my head a little, it looks recursive at first and I went and added too many functions. I think currying will need a revisit.
