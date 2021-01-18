import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import { useState } from 'react';

const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Sumith', age: 40 },
      { name: 'Sammy boy', age: 42 }

    ],
    otherState: "Some value"

  });
  const switchNameHandler = () => {
    // DON'T do this: this.state.person[0].name ='Sumith Damodaran';
    setPersonsState({
      persons: [
        { name: 'Sumith Damodaran', age: 42 },
        { name: 'The Great Sammy boy', age: 43 }],
      otherState: personsState.otherState
    })
  }

  return (
    <div className="App">
      <h1>Hi, I am a React APP</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person 
      name={personsState.persons[0].name} 
      age={personsState.persons[0].age} />
      <Person click={switchNameHandler}
      name={personsState.persons[1].name} 
      age={personsState.persons[1].age}>my hobbies : Music</Person>
    </div>
  );


}

export default App;
