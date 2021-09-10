import React from "react";
import { Link, withRouter } from "react-router-dom";

function Landing(props) {
  return (
    <div className="navigation">
            <ul >
              <li><Link to="/">Landing</Link></li>
              <li><Link to="/Lesson-001">Lesson 001</Link></li>
              <li><Link to="/Lesson-002">Lesson 002</Link></li>
              <li><Link to="/Lesson-003">Lesson 003</Link></li>
              <li><Link to="/Lesson-004">Lesson 004</Link></li>
              <li><Link to="/Lesson-005">Lesson 005</Link></li>
              <li><Link to="/Lesson-006">Lesson 006</Link></li>
              <li><Link to="/Lesson-007">Lesson 007</Link></li>
              <li><Link to="/Lesson-008">Lesson 008</Link></li>
              <li><Link to="/Lesson-009">Lesson 009</Link></li>
              <li><Link to="/Lesson-010">Lesson 010</Link></li>

            </ul>
          </div>
  );
}

export default withRouter(Landing);