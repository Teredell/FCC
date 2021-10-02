import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

  class Lesson020 extends React.Component {
    //constructor(props) {super(props);} //As with lesson 8, this constructor is still not required in the VS code app
    render() {
      return (
        <div>
            <Link to="/">Landing</Link><br /><br /><br />
            <Camper/>
        </div>
      );
    }
  };
  
  export default withRouter(Lesson020);

const Camper = (props) => {
    return <p>{props.name}</p>
}
Camper.defaultProps = { name: "CamperBot" };
Camper.propTypes = { name: PropTypes.string.isRequired};