import React from "react";
import { Link, withRouter } from "react-router-dom";

function Lesson001(props) {
  const JSX = <div>
  <Link to="/">Landing</Link><br /><br /><br />
  <h1>Hello JSX!</h1>
</div>
  return (JSX);
}

export default withRouter(Lesson001);