import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import { Component, useState } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
class App extends Component {

  state = {
    persons: [
      { name: 'Sumith', age: 40 },
      { name: 'Sammy boy', age: 42 },
      { name: 'Stephanie', age: 31 }

    ],
    otherState: "Some value",

    userName: 'Sumith Damodaran',
    showPersons: false
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
  userNameChangedHandler = (event) => {
    // DON'T do this: this.state.person[0].name ='Sumith Damodaran';
    this.setState({
      userName: event.target.value
    })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I am a React APP</h1>
        <p>This is really working!</p>
        <button style={style}
          onClick={() => this.togglePersonsHandler()}>Switch Name</button>
        { this.state.showPersons ?
          <div >
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} changed={this.nameChangedHandler} />
            <Person click={this.togglePersonsHandler.bind(this, 'The Great Sammy boy')}
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.nameChangedHandler}>my hobbies : Music</Person>
          </div> : null
        }
        <hr/>
        <UserInput changed={this.userNameChangedHandler} value={this.state.userName} />
        <UserOutput userName={this.state.userName} />

        <UserOutput userName="Sammy" />

        <UserOutput userName="SBoy" />
      </div>
    );

  }
}

export default App;
