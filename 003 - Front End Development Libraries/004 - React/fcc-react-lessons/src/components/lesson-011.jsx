import React from "react";
import { Link, withRouter } from "react-router-dom";

const NonCitrus = () => {
    return (
      <div>
        <h2>Non-Citrus:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };

const Citrus = () => {
    return (
        <div>
        <h2>Citrus:</h2>
        <ul>
            <li>Lemon</li>
            <li>Lime</li>
            <li>Orange</li>
            <li>Grapefruit</li>
        </ul>
        </div>
    );
};

const Vegetables = () => {
    return (
        <div>
        <h2>Vegetables:</h2>
        <ul>
            <li>Brussel Sprouts</li>
            <li>Broccoli</li>
            <li>Squash</li>
            <li>Carrot</li>
        </ul>
        </div>
    );
};

  class Fruits extends React.Component {
    //constructor(props) {super(props);} //Still not req'd
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          { /* Change code below this line */ }
          <NonCitrus />
          <Citrus />
          { /* Change code above this line */ }
        </div>
      );
    }
  };
  
  class TypesOfFoodTwo extends React.Component {
    //constructor(props) {super(props);} //Still not req'd
    render() {
      return (
        <div>
        <Link to="/">Landing</Link><br /><br /><br />
          <h1>Types of Food:</h1>
          { /* Change code below this line */ }
          <Fruits />
          { /* Change code above this line */ }
          <Vegetables />
        </div>
      );
    }
  };

export default withRouter(TypesOfFoodTwo);
