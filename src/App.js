import "./App.css";
import Person from "./Person/Person";
import { useState } from "react";

const App = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
    otherState: "Some other value",
  });

  const switchNameHandler = (newName) => {
    setPersonState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 26 },
      ],
    });
  };

  const nameChangeHandler = (event) => {
    setPersonState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, React</h1>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person 
        click={switchNameHandler.bind(this, 'Asd')} 
        name={personState.persons[1].name} 
        age={personState.persons[1].age}
        changed={nameChangeHandler}
        > My hobbies </Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
      <button onClick={() => switchNameHandler()}>Switch Name</button>
    </div>
  );
};

export default App;
