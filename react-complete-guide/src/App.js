import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
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
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              click={() => this.deletePersonsHandler(index)}

              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)} >
              {person.hobbies}
            </Person>
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
    let classes = []; //['red','bold'].join(' ')
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I am a React APP</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
          <hr />
          <UserInput changed={this.userNameChangedHandler} value={this.state.userName} />
          <UserOutput userName={this.state.userName} />

          <UserOutput userName="Sammy" />

          <UserOutput userName="SBoy" />
        </div>
      </StyleRoot>
    );

  }
}

export default Radium(App);
