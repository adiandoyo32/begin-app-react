import "./App.css";
import Person from "./Person/Person";
import React, { Component } from "react";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
    showPersons: true,
  }

  // const [personState, setPersonState] = useState({
  //   persons: [
  //     { name: "Max", age: 28 },
  //     { name: "Manu", age: 29 },
  //     { name: "Stephanie", age: 26 },
  //   ],
  //   otherState: "Some other value",
  // });

  // switchNameHandler = (newName) => {
  //   setPersonState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: "Manu", age: 29 },
  //       { name: "Stephanie", age: 26 },
  //     ],
  //   });
  // };

  // nameChangeHandler = (event) => {
  //   setPersonState({
  //     persons: [
  //       { name: "Max", age: 28 },
  //       { name: event.target.value, age: 29 },
  //       { name: "Stephanie", age: 26 },
  //     ],
  //   });
  // };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, React</h1>
        <button onClick={this.togglePersonHandler}>Show Name</button>
        {
          this.state.showPersons === true ? 
            <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person 
              // click={this.switchNameHandler.bind(this, 'Asd')} 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              // changed={this.nameChangeHandler}
              > My hobbies </Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
          </div> : null
        }
        
      </div>
    );
  }
  
};

export default App;
