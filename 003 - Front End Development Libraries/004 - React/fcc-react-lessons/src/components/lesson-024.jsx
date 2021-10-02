import React from "react";
import { Link, withRouter } from "react-router-dom";

  class Lesson024 extends React.Component {
    constructor(props) 
    {super(props);
        this.state = {
            text: "Hello"
        }
    this.handleClick = this.handleClick.bind(this);
    } 
    handleClick() {
    this.setState({
        text: "You clicked!"
        });
    }
    render() {
      return (
        <div>
            <Link to="/">Landing</Link><br /><br /><br />
            <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.text}</h1>
        </div>
      );
    }
  };
  
  export default withRouter(Lesson024);
