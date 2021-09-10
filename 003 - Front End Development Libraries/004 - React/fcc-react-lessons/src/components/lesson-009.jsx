import React from "react";
import { Link, withRouter } from "react-router-dom";

const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class Lesson009 extends React.Component {
    //constructor(props) {super(props);} //As with lesson 8, this constructor is still not required in the VS code app
    render() {
      return (
        <div>
            <Link to="/">Landing</Link><br /><br /><br />
            <h1>I am the parent</h1>
          { /* Change code below this line */ }
            <ChildComponent />
          { /* Change code above this line */ }
        </div>
      );
    }
  };
  
  export default withRouter(Lesson009);