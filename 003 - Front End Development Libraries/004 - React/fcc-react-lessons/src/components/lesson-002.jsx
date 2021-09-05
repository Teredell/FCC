import React from "react";
import { Link, withRouter } from "react-router-dom";

function Lesson002(props) {
  const JSX = <div>
  <Link to="/">Landing</Link><br /><br /><br />
<h1>This is the h1 element</h1>
<p>this is the p element</p>
<ul>
  <li>within the unordered list, this is li 1</li>
  <li>within the unordered list, this is li 2</li>
  <li>within the unordered list, this is li 3</li>
</ul>
</div>
  return (JSX);
}

export default withRouter(Lesson002);