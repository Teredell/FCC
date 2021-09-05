import React from "react";
import { Link, withRouter } from "react-router-dom";

function Lesson003(props) {
  const JSX = <div>
  <Link to="/">Landing</Link><br /><br /><br />

  {/*This is a JSX comment */}
  <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
</div>
  return (JSX);
}

export default withRouter(Lesson003);