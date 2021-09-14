import React from "react";
import { Link, withRouter } from "react-router-dom";

  class Lesson012 extends React.Component {
    //constructor(props) {super(props);} //As with lesson 8, this constructor is still not required in the VS code app
    render() {
      return (
        <div>
            <Link to="/">Landing</Link><br /><br /><br />
            <p>Lesson will look same as lesson 11</p><br />
            <p>go and view Staging_area lesson to see about rendering to the DOM</p>
        </div>
      );
    }
  };
  
  export default withRouter(Lesson012);