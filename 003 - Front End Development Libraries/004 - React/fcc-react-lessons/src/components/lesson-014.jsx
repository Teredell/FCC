import React from "react";
import { Link, withRouter } from "react-router-dom";

  class Lesson014 extends React.Component {
    constructor(props) {
        super(props);
    } 
    render() {
      return (
        <div>
            <Link to="/">Landing</Link><br /><br /><br />
            <h2>What date is it?</h2>
            <CurrentDate date={Date()}/>
        </div>
      );
    }
  };
  
  export default withRouter(Lesson014);


  const CurrentDate = (props) => {
    return (
      <div>
        { /* Change code below this line */ }
        <p>The current date is: {props.date}</p>
        { /* Change code above this line */ }
      </div>
    );
  };

  /*
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          //{ /* Change code below this line  }
          <CurrentDate date={Date()}/>
          //{ /* Change code above this line  }
        </div>
      );
    }
  };
  */