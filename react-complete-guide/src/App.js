import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import { Component, useState } from 'react';

class App extends Component {

  state = {
    persons: [
      { name: 'Sumith', age: 40 },
      { name: 'Sammy boy', age: 42 }

    ],
    otherState: "Some value"

  };
  switchNameHandler = (newName) => {
    // DON'T do this: this.state.person[0].name ='Sumith Damodaran';
    this.setState({
      persons: [
        { name: newName, age: 42 },
        { name: newName, age: 43 }],
      otherState: this.state.otherState
    })
  }
  nameChangedHandler = (event) => {
    // DON'T do this: this.state.person[0].name ='Sumith Damodaran';
    this.setState({
      persons: [
        { name: event.target.value, age: 42 },
        { name: event.target.value, age: 43 }],
      otherState: this.state.otherState
    })
  }
render(){
  return (
    <div className="App">
      <h1>Hi, I am a React APP</h1>
      <p>This is really working!</p>
      <button onClick={()=>this.switchNameHandler('Sumith Damodaran!!')}>Switch Name</button>
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age} changed={this.nameChangedHandler} />
      <Person click={this.switchNameHandler.bind(this,'The Great Sammy boy')}
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      changed={this.nameChangedHandler}>my hobbies : Music</Person>
    </div>
  );

}
}

export default App;
