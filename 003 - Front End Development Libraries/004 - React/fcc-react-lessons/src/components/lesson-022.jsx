import React from "react";
import { Link, withRouter } from "react-router-dom";

  class Lesson022 extends React.Component {
    constructor(props) 
    {super(props);
        this.state = {
            name: 'freeCodeCamp'
        }
    } 
    render() {
        const name = this.state.name;
      return (
        <div>
            <Link to="/">Landing</Link><br /><br /><br />
            <h1>{name}</h1>
        </div>
      );
    }
  };
  
  export default withRouter(Lesson022);