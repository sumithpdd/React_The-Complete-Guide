import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
     <h1>Hi, I am a React APP</h1>
     <p>This is really working!</p>
     <Person name="Sumith" age="40" />
     <Person name="Sammy boy" age="42">my hobbies : Music</Person>
    </div>
  );
}

export default App;
