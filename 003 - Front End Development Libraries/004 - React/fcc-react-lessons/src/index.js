import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //As at lesson 1, this is not used, it has been re-activated
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<App />, document.getElementById('root'));


//const JSX = <h1>Hello JSX! //This was lesson 1

//This is lesson 4
const Lesson004 = (
  <div>
    {/*<h1>Hello World</h1>*/}
    <p>If this appears lesson 4 is done</p>
  </div>
);
// Change code below this line
ReactDOM.render(Lesson004, document.getElementById('lesson004'));






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
