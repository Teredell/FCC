import React from "react";
import { Link, withRouter } from "react-router-dom";

  class Lesson017 extends React.Component {
    //constructor(props) {super(props);} //As with lesson 8, this constructor is still not required in the VS code app
    render() {
      return (
        <div>
            <Link to="/">Landing</Link><br /><br /><br />
                <Items quantity={17}/>
        </div>
      );
    }
  };
  
  export default withRouter(Lesson017);


  const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
    Items.defaultProps = {
    quantity: 0
  }
  