import React from "react";
import { Link, withRouter } from "react-router-dom";

  class Lesson021 extends React.Component {
    constructor(props) 
    {super(props);
        this.state = {
            name: "mat"
        }
    } 
    render() {
      return (
        <div>
            <Link to="/">Landing</Link><br /><br /><br />
            <h1>{this.state.name}</h1>
        </div>
      );
    }
  };
  
  export default withRouter(Lesson021);