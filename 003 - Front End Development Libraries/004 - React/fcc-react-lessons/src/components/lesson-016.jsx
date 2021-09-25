import React from "react";
import { Link, withRouter } from "react-router-dom";

  class Lesson016 extends React.Component {
    //constructor(props) {super(props);} //As with lesson 8, this constructor is still not required in the VS code app
    render() {
      return (
        <div>
            <Link to="/">Landing</Link><br /><br /><br />
                <ShoppingCart />
        </div>
      );
    }
  };
  
  export default withRouter(Lesson016);


  const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
        <p>{props.items}</p>
      </div>
    )
  };
  // Change code below this line
  
  ShoppingCart.defaultProps = {
    items: 1
  }