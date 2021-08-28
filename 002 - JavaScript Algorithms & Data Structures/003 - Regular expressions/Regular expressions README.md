I will document my journey through the REGEX exercises on FCC in this file & update this file once done.

So (broadly) REGEX is searching through strings using different methodolgies.

There are (so far) 2 different "flags" one can apply to assist in searching a regex

i = ignore case
g = match multiples
These are put after the regex query i.e. let query = /A-Za-z0-9/ig;

It's actually far more complicated that I first suspcted and there are many useful tools and methodologies used for searching through string using regex.
I'll try and show below some of my limited understanding of these tools since finishing that section on FCC

In general the below things will be used with the .test or .match methods
i.e. 
let resultString == someString.match(someRegex);
or
let resultBool == someRegex.test(someString);

where someString might equal something like "Darth Vader is awesome!"
and someRegex might equal /darth/i

Which resultString == someString.match(someRegex); would return Darth (as i has ignored case and Darth is present)

Lot of other tools exist to assit in searching strings, below are some (there are more!);

/xxx.xx/ = wildcard /p.nk/gi will match pink, punk, Pink, Punk & pink pink etc etc
/xx[amndhe]xx/ = this selection of characters
/[a-e]xcx/ = letters between a & e
/[a-e2-6]/ = you can also do above with numbers NOT SEPERATE BRACKETS - this is not true!
/[^asde]/ = ^not these ones note that ^ is within the brackets
/[s+]/ = will find letters that repeat i.e. mississippi = ss ss
/Aa*/ = will match Ammmm or Aaaaaaaaa or Aa but not naaa
/?/ = ? will return shortest not longest matching pattern 
/^and/ = ^and will only be true if at the start of a string i.e. "and stuff" = true "stuff and" false
/some$/ = $ means must be last in the string
/\w/ = is the same as /[A-Za-z0-9_]/ matches everything & underscore
/\W/ = not /[A-Za-z0-9_]/
/\d/ = digits
/\D/ = not digits
/\s/ = space

Other tools are also used in REGEX such as /some|thing/ or indeed /(some)(thing)\1\2/
Later lessons around 22 and onwards have detailed explainations of the brackets and also use the | pipe for or methods within regex