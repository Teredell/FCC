Lesson 1: Looks like these lessons are going to require lots of reading and consideration - I worked out the answerr very quickly and the actual implementing of my bit of code was 2 seconds, but i had to understand everything going on before i did that 2 seconds.

Lesson 2: Wow, alot more reading again. functions can be passed into or returned from other functions. Functions that do this are called higher order functions. Functions that are passed in or returned from are called Lambda.
The getTea in this instance is the higher order function and prepareGreenTea or prepareBlackTea are the Lambdas.
Again, worked out the answer and implemented my bit in 2 seconds, but had to understand everthing else first

Lesson 3: Hola! this is still very heady lots of conceptual thinking going into these exercises! After refreshing myself on how splice() works i thought the + 1 needed removing, but then eventually i figured out that running the splice a second time  after the array had been changed by the first splice was causing the error. once the beforeTabsIndex runs you want to take all the tabs after the current index, which is **NOW** index 0. so by changing the value in the afterTabsIndex from index + 1 to just 1, which will **NOW** be the tab after zeroth tab.

Lesson 4: Again very wordy, but this one has by far been the easiest. Becuase i'm returning a value of fixed+1 in my function, fixedValue isn't changing. this concept seems realtively eassily understood but the point was to not make changes to variables.

Lesson 5: I have a slight issue with the way this exercise plays out. If i write incrementer(fixedValue){} i could still pass anyOtherValue into the function. it seems better to write it as just value as shown in the help, but it's a little off. Again, i understand but this exercise might be a little off on wording.

Lesson 6: I keep forgetting you can't copy an array, you have to use the spread operator. Aside from reminding myself of that i solved without the help. Made sense.

Lesson 7: OK, so we finally encountered the .map method. I had to do a little homework and made it work without looking at the help again! Although i should definately practice map alot more, i'm sure it will come up.

Lesson 8: READ THE FUCKING QUESTION. Array can be accessed using *this*, which would have saved some time. Aside from that all i did was create a for loop.

Lesson 9: Well I solved this, correctly i just did the parseFloat in the .map & not the .filter & FCC wouldn't pass me. I have put the FCC approved solution at the bottom. Incidentally i learned about .filter!!

Lesson 10: Was missing the question!. Very similar to lesson 8 in format so was exceptionally easy to solve. After pausing to review the help and check, i have provided another solution as it appears i may be missing the point. The point is whether something is true or false, not whether it returns a remainder

Lesson 11: Relatively simple, create a function that uses .slice(), not sure what happened there.

Lesson 12: Also straightforward, the point they are driving home is to not mutate stuff, EVER. So using sPlice is bad but you can sometimes achieve the same thing using slice, which returns a new array, not mutate the one you're working on.

Lesson 13: concat!!!! finally a lesson on concat, i've had to google it's use before now anyway, but it's nice to see it here.

Lesson 14: In the spirit of not changing things with functional programming, the use of the .push method is also discouraged, using concat is favoured. The exercise shows.

Lesson 15: This took some doing, i definatewly need more practice with .reduce and filter and map.  But reduce seems to be lauded all over the internet so maybe an area of focus.