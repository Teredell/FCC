import React from "react";
import { Link, withRouter } from "react-router-dom";

const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
        { /* Change code below this line */ }
          <TypesOfFruit />
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    //constructor(props) {super(props);} //Still not needed, per lesson 8 & 9
    render() {
      return (
        <div>
            <Link to="/">Landing</Link><br /><br /><br />
                <h1>Types of Food:</h1>
                    { /* Change code below this line */ }
                        <Fruits />
                    { /* Change code above this line */ }
        </div>
      );
    }
  };


  export default withRouter(TypesOfFood);