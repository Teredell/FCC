import React from "react";
import { Link, withRouter } from "react-router-dom";

  class Lesson019 extends React.Component {
    //constructor(props) {super(props);} //As with lesson 8, this constructor is still not required in the VS code app
    render() {
      return (
        <div>
            <Link to="/">Landing</Link><br /><br /><br />
            <h2>Reset Password</h2>
            <h3>We've generated a new temporary password for you.</h3>
            <h3>Please reset this password from your account settings ASAP.</h3>
            { /* Change code below this line */ }
            <ReturnTempPassword tempPassword={"atLeast8CharactersLong"}/>
            { /* Change code above this line */ }
        </div>
      );
    }
  };
  
  export default withRouter(Lesson019);

  class ReturnTempPassword extends React.Component {
    //constructor(props) {super(props);}
    render() {
      return (
          <div>
              { /* Change code below this line */ }
              <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
              { /* Change code above this line */ }
          </div>
      );
    }
  };