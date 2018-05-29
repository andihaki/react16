import React, { Component } from 'react';

import css from './App.css';

import Person from './Person/Person'

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
    let btnClass = "";

    if(this.state.showPersons){
      persons = (
        <div>
          {
            // {name, age} = desctructuring
            // sama juga dengan person.name, person.age
            this.state.persons.map( ({id, name, age}, index) => {
              return <Person 
                key={id} 
                name={name} 
                age={age}
                click={this.deletePersonsHandler}
                changed={(event) => this.nameChangeHandler(event, id)}
              />
            })
          }          
        </div>        
      );
      
      btnClass = css.Red;
    }

    const classes = [];
    if (this.state.persons.length < 2){
      classes.push(css.red);
    }
    if (this.state.persons.length < 1){
      classes.push(css.italic);
    }

    return (
      
      <div className={css.App}>
        <h1 className={classes.join(" ")}>I'm Spartaaaa</h1>
        <button   
          className={btnClass}        
          onClick={this.togglePersonsHandler}>Switch Name</button>        
        {persons}
        
      </div>
      
    );
  }
}

export default App;
