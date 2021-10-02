import React from "react";
import { Link, withRouter } from "react-router-dom";

  class Lesson023 extends React.Component {
    constructor(props) 
    {super(props);
        this.state = {
            name: 'Initial State'
        }
    this.handleClick = this.handleClick.bind(this);
    } 
    handleClick() {
    this.setState({
      name: "React Rocks!"
        });
    }
    render() {
      return (
        <div>
            <Link to="/">Landing</Link><br /><br /><br />
            <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };
  
  export default withRouter(Lesson023);