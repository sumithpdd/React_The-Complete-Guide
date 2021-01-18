import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import { Component } from 'react';

class App extends Component {

  state = {
    persons: [
      { name: 'Sumith', age: 40 },
      { name: 'Sammy boy', age: 42 }

    ]

  }
  swithNameHandler = () => {
    // DON'T do this: this.state.person[0].name ='Sumith Damodaran';
    this.setState({
      persons: [
        { name: 'Sumith Damodaran', age: 42 },
        { name: 'The Great Sammy boy', age: 43 }]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React APP</h1>
        <p>This is really working!</p>
        <button onClick={this.swithNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>my hobbies : Music</Person>
      </div>
    );
  }

}

export default App;
