import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import { Component } from 'react';

class App extends Component {

  state = {
    persons: [
      {
        name: 'Sumith', age: 40
      },
      { name: 'Sammy boy', age: 42 }

    ]

  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React APP</h1>
        <p>This is really working!</p>
        <button>Switch Nme</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>my hobbies : Music</Person>
      </div>
    );
  }

}

export default App;
