
import './App.css';
import { Component } from 'react';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/cockpit';

class App extends Component {

  state = {
    persons: [
      { id: 'abc1', name: 'Sumith', age: 40 },
      { id: 'abc2', name: 'Sammy boy', age: 42 },
      { id: 'abc3', name: 'Stephanie', age: 31 }

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
  nameChangedHandler = (event, id) => {
    // DON'T do this: this.state.person[0].name ='Sumith Damodaran';
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({},this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
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
  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({ persons: persons });
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
           <Persons persons={this.state.persons}
            clicked={this.deletePersonsHandler}
            changed={this.nameChangedHandler}
          /> 
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    return (

      <div className="App">
        <Cockpit showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler}
          />
        {persons}
        <hr />
        <UserInput changed={this.userNameChangedHandler} value={this.state.userName} />
        <UserOutput userName={this.state.userName} />

        <UserOutput userName="Sammy" />

        <UserOutput userName="SBoy" />
      </div>
    );

  }
}

export default App;
