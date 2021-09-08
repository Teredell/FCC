/*Refer to index.js in src folder*/

import React from "react";
import { Link, withRouter } from "react-router-dom";

function Lesson004(props) {
  const JSX = <div>
  <Link to="/">Landing</Link><br /><br /><br />
  <h1>Go to /src/index.js to view this lesson</h1>
</div>
  return (JSX);
}

export default withRouter(Lesson004);