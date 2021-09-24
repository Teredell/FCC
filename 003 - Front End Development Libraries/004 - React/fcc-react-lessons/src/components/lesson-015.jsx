import React from "react";
import { Link, withRouter } from "react-router-dom";

  class Lesson015 extends React.Component {
    //constructor(props) {super(props);} //As with lesson 8, this constructor is still not required in the VS code app
    render() {
      return (
        <div>
            <Link to="/">Landing</Link><br /><br /><br />
            <h1>To Do Lists</h1>
                <h2>Today</h2>
                    <List tasks={["some shit", "code", "walk"]}/>
                <h2>Tomorrow</h2>
                <List tasks={["different thing", "code", "walk"]}/> 
        </div>
      );
    }
  };
  
  export default withRouter(Lesson015);


  const List = (props) => {
    /* Change code below this line */
    return <p>{props.tasks.join(', ')}</p>
    /* Change code above this line */
  };






/*  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          //{ /* Change code below this line */ //}
          //<List tasks={["some shit", "code", "walk"]}/>
          //<h2>Tomorrow</h2>
          //<List tasks={["different thing", "code", "walk"]}/>
          //{ /* Change code above this line */ }
          /*
        </div>
      );
    }
  };
*/