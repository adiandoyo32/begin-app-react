import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import { useState } from 'react';

const App = props => {
  const [ personState, setPersonState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
    otherState: 'Some other value',
  })
 
  console.log(personState);
  
  const switchNameHandler = () => {
    setPersonState(
      {
        persons: [
          { name: 'Maximilan', age: 28 },
          { name: 'Manu', age: 29 },
          { name: 'Stephanie', age: 26 },
        ]
      }
    )
  }
  
    return (
      <div className="App">
        <h1>Hi, React</h1>
        <Person name={personState.persons[0].name} age={personState.persons[0].age} />
        <Person name={personState.persons[1].name} age={personState.persons[1].age} />
        <Person name={personState.persons[2].name} age={personState.persons[2].age} />
        <button onClick={switchNameHandler} >Switch Name</button>
      </div>
    );
}

export default App;
