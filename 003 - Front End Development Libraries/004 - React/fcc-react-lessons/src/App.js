import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Lesson001, Lesson002, Lesson003, Lesson005, Lesson006, Landing } from "./components";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
        <Route path="/" exact component={() => <Landing />} />
          <Route path="/Lesson-001" exact component={() => <Lesson001 />} />
          <Route path="/Lesson-002" exact component={() => <Lesson002 />} />
          <Route path="/Lesson-003" exact component={() => <Lesson003 />} />
          <Route path="/Lesson-005" exact component={() => <Lesson005 />} />
          <Route path="/Lesson-006" exact component={() => <Lesson006 />} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
