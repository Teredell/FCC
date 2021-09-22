import React from "react";
import { Link, withRouter } from "react-router-dom";

  class Lesson013 extends React.Component {
    //constructor(props) {super(props);} //As with lesson 8, this constructor is still not required in the VS code app
    render() {
      return (
        <div>
            <Link to="/">Landing</Link><br /><br /><br />
            <h1>My First React Component!</h1>
        </div>
      );
    }
  };
  
  export default withRouter(Lesson013);

/*
  // Change code below this line
class MyComponent extends React.Component{
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>My First React Component!</h1>
        </div>
      );
    }
  };
  
ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
*/