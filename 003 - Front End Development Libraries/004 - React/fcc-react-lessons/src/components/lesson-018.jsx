import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

  class Lesson018 extends React.Component {
    //constructor(props) {super(props);} //As with lesson 8, this constructor is still not required in the VS code app
    render() {
      return (
        <div>
            <Link to="/">Landing</Link><br /><br /><br />
                <Items quantity={13}/>
        </div>
      );
    }
  };
  
  export default withRouter(Lesson018);


  const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
Items.defaultProps = { quantity: 0};
Items.propTypes = { quantity: PropTypes.number.isRequired};