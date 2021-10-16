class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'CamperBot'
      }
    }
    render() {
      return (
         <div>
           {/* Change code below this line */}
           <Navbar username={this.state.name}/>
           {/* Change code above this line */}
         </div>
      );
    }
  };
  
  class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
      <div>
        {/* Change code below this line */}
        <h1>Hello, my name is: {this.props.username}</h1> 
        {/*it is important to note props is used here not state
        it is also important to note that in my testing i am using username, or indeed it could be any variable name
        to teach myself and differentiate from the lesson, where using name i feel is confusing*/}
        {/* Change code above this line */}
      </div>
      );
    }
  };