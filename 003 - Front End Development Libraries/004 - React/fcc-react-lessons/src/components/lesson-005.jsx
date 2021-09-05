import React from "react";
import { Link, withRouter } from "react-router-dom";

function Lesson005(props) {
  const JSX = <div className="myDiv">
  <Link to="/">Landing</Link><br /><br /><br />

  <h1>Add a class to this div</h1>
</div>
  return (JSX);
}

export default withRouter(Lesson005);