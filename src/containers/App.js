import React, { Component } from 'react';

import css from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons : [
      { id: 1, name: "separo", age: 33 },
      { id: 2, name: "jak", age: 30 },
    ],
    showPersons: false,    
  }

  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons });
  }

  nameChangeHandler = (event, id) => {
    //cari persons dengan === id
    const personIndex = this.state.persons.findIndex(p => {      
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
        
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    })
  }

  render() {    
    let persons = null;
    

    if(this.state.showPersons){
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonsHandler}
            changed={this.nameChangeHandler}
          />          
        </div>        
      );
      
      
    }    

    return (
      
      <div className={css.App}>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
        
      </div>
      
    );
  }
}

export default App;