import React from "react";
import { withRouter } from "react-router-dom";

//function Lesson008(props) {
//  const MyComponent = <div>
//  <Link to="/">Landing</Link><br /><br /><br />
//    <div>Some string of text</div>
//  </div>
//  return (MyComponent);
//}

class MyComponentTwo extends React.Component {
   constructor(props) {
      super(props);
    }
    render() {
      // Change code below this line
  return(
    <div>
    <h1>Hello React!</h1>
    </div>
  );
  // Change code above this line
    }
  };

export default withRouter(MyComponentTwo);