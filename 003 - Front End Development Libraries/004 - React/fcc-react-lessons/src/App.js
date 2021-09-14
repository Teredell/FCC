import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Lesson001, Lesson002, Lesson003, Lesson004, Lesson005, Lesson006, Lesson007, Lesson008, Lesson009, TypesOfFood, 
  TypesOfFoodTwo, Lesson012, Landing } from "./components";
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
          <Route path="/Lesson-004" exact component={() => <Lesson004 />} />
          <Route path="/Lesson-005" exact component={() => <Lesson005 />} />
          <Route path="/Lesson-006" exact component={() => <Lesson006 />} />
          <Route path="/Lesson-006" exact component={() => <Lesson006 />} />
          <Route path="/Lesson-007" exact component={() => <Lesson007 />} />
          <Route path="/Lesson-008" exact component={() => <Lesson008 />} />
          <Route path="/Lesson-009" exact component={() => <Lesson009 />} />
          <Route path="/Lesson-010" exact component={() => <TypesOfFood />} />
          <Route path="/Lesson-011" exact component={() => <TypesOfFoodTwo />} />
          <Route path="/Lesson-012" exact component={() => <Lesson012 />} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
