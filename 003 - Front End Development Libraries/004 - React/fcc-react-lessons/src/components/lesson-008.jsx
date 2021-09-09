import React from "react";
import { Link, withRouter } from "react-router-dom";

//Refer lesson 7 for default page look

class Lesson008 extends React.Component {
//   constructor(props) {   //For the purposes of this exercise, the constructor isn't needed in this webpage but will be later
//      super(props);
//    }
    render() {
      // Change code below this line
  return(
    <div>
      <Link to="/">Landing</Link><br /><br /><br />
    <h1>Hello React!</h1>
    </div>
  );
  // Change code above this line
    }
  };

export default withRouter(Lesson008);