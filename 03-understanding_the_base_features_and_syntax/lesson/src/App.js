import { Component } from 'react';
import Person from './Person';

import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }

  switchNameHandler = () => {
    const name = this.state.persons[0].name === 'Max' ? 'Maximilian' : 'Max';
    this.setState({
      persons: [
        { name: name, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    });
  }

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: this.state.persons[0].name, age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    });
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
        <h1>I'm a React App :)</h1>
        <button 
          style={style}
          onClick={this.switchNameHandler}
        >
          Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name} 
          years={this.state.persons[0].age}
        />
        <Person 
          name={this.state.persons[1].name} 
          years={this.state.persons[1].age}
          click={this.switchNameHandler}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          years={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
