import React from "react";
import { Link, withRouter } from "react-router-dom";

function Lesson006(props) {
  const JSX = <div>
  <Link to="/">Landing</Link><br /><br /><br />

  <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
  return (JSX);
}

export default withRouter(Lesson006);