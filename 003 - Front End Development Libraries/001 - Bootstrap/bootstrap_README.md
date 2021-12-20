26/8/21 - stop @ end of lesson 19

I'm flying through this course, so far 19 lessons deep and I think I need a recap to refer to later.
First I'm pretty rusty with the old HTML but I'm not that big on making stuff pretty.

Bootstrap, essentially is putting this line below at the top of your HTML;

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>


To access all the bootstrap features, which are classes you add to html tags.
Some of these were:

<div class=container-fluid>

class="img-responsive"

class="red-text text-center"

class="text-danger"

<button class="btn btn-default">Like</button>

<button class="btn btn-primary btn-block">Like</button>

<button class="btn btn-block btn-info">Info</button>
  
<button class="btn btn-block btn-danger">Delete</button>


BUT MOST IMPORTANTLY we learned that the sheet can be divided into rows and columns, using the below format. The columns have to divide by 12 (or so it seems)

<div class="row">
<div class="col-xs-4"> //make 3 of these in one row!!


And then at lesson 13 we got taught to also add this to the top of the HTML

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">


This allows for access to font awesome styling, which is also quite helpful
Some of the things font awesome showed were:

<i class="fas fa-thumbs-up">  Like</i>
  

<i class="btn btn-block btn-info">

<i class="fas fa-info-circle">

<i class="fa fa-paper-plane">

class="form-control" 

buttons and checkboxes can also be in rows
