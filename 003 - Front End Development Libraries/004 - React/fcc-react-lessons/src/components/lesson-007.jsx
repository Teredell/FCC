import React from "react";
import { Link, withRouter } from "react-router-dom";

function Lesson007(props) {
  const MyComponent = <div>
  <Link to="/">Landing</Link><br /><br /><br />
    <div>Some string of text</div>
  </div>
  return (MyComponent);
}

export default withRouter(Lesson007);