I will document my journey through the REGEX exercises on FCC in this file

So REGEX is searching through strings using different methodolgies.

There are different "flags" one can apply to assist in searching a regex

i = ignore case
g = match multiples


Using the below inside the regex also assists
/xxx.xx/ = wildcard
/xx[amndhe]xx/ = this selection of characters
/[a-e]xcx/ = letters between a & e
/[a-e2-6]/ = you can also do above with numbers NOT SEPERATE BRACKETS

example: let someVar = /p.nk/gi will match pink, punk, Pink, Punk & pink pink etc etc