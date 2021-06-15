I will document my journey through the REGEX exercises on FCC in this file

So REGEX is searching through strings using different methodolgies.

There are different "flags" one can apply to assist in searching a regex

i = ignore case
g = match multiples


Using the below inside the regex also assists
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



