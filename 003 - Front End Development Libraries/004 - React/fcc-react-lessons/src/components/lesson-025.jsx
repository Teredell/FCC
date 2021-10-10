import React from "react";
import { Link, withRouter } from "react-router-dom";

  class Lesson025 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          visibility: false
        };
        // Change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
        // Change code above this line
      }
      // Change code below this line
toggleVisibility(){
    this.setState(state => {
    if(state.visibility === false){
        return { visibility: true };
    } else {
        return { visibility: false };
    }
    });
}
    // Change code above this line
    render() {
if (this.state.visibility) {
    return (
        
            <div>
                <Link to="/">Landing</Link><br /><br /><br />
                <button onClick={this.toggleVisibility}>Click Me</button>
                <h1>Now you see me!</h1>
            </div>
        );
        } else {
        return (
            <div>
                <Link to="/">Landing</Link><br /><br /><br />
                <button onClick={this.toggleVisibility}>Click Me</button>
            </div>
        );
        }
    }
}

  export default withRouter(Lesson025);