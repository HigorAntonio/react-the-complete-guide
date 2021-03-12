import { Component } from 'react';
// import Radium, { StyleRoot } from 'radium'; Permite usar pseudo seletores e media-queries em objetos javascript que serão passados para a propriedade style de um elemento jsx ou componente do react
import styled from 'styled-components';

import Person from './Person';

import './App.css';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, personId) => {
    this.setState({
      persons: this.state.persons.map(p => 
        p.id !== personId ? p : { id: p.id, name: event.target.value, age: p.age })
    });
  }

  deletePersonHandler = (personId) => {
    this.setState({
      persons: this.state.persons.filter(p => p.id !== personId ? p : null)
    });
  }

  togglePersonsHandle = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    // const style = {
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    // };

    /* style.backgroundColor = this.state.showPersons ? 'red' : 'green'; */
    // style[':hover'] = this.state.showPersons ? 
    //   {
    //     backgroundColor: 'salmon',
    //     color: 'black'
    //   } :
    //   {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   } Para usar essa definição de estilo utilize a biblioteca Radium

    const persons = (this.state.showPersons && 
      <div>
        {this.state.persons.map(person => 
          <Person
            key={person.id}
            click={() => this.deletePersonHandler(person.id)} 
            name={person.name} 
            age={person.age}
            changed={(event) => this.nameChangedHandler(event, person.id)}
          />
        )}
        
      </div>);

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    
    return (
      <div className="App">
        <h1>I'm a React App :)</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        {/* <button 
          style={style}
          onClick={this.togglePersonsHandle}
        > */}
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandle}  
        >
          Toggle Persons
        </StyledButton>
        {/* </button> */}
        {persons}
      </div>
    );
  }
}

export default App;
