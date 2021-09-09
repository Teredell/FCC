import React from "react";
import { Link, withRouter } from "react-router-dom";

//function Lesson008(props) {
//  const MyComponent = <div>
//  <Link to="/">Landing</Link><br /><br /><br />
//    <div>Some string of text</div>
//  </div>
//  return (MyComponent);
//}

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