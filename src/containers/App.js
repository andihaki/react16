import React, { PureComponent } from 'react';

import css from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClassName from '../hoc/withClassName';

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('constructor app', props);
    this.state = {
      persons : [
        { id: 1, name: "separo", age: 33 },
        { id: 2, name: "jak", age: 30 },
      ],
      showPersons: false,    
      toggleClick: 0,
    }
  }

  componentWillMount(){
    console.log('componentWillMount');
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons
  //     || nextState.showPersons !== this.state.persons;
  // }

componentWillUpdate(nextProps, nextState){
    console.log('componentWillUpdate', nextProps, nextState);        
}

componentDidUpdate(){
    console.log('componentDidUpdate');        
}
  
  // state = {
  //   persons : [
  //     { id: 1, name: "separo", age: 33 },
  //     { id: 2, name: "jak", age: 30 },
  //   ],
  //   showPersons: false,    
  // }

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
    // prevState dipake, supaya hanya di class ini bisa mutate (ubah) nilai dari toggleClick
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClick: prevState.toggleClick + 1,
      }
    })
  }

  render() {    
    console.log('render persons');
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
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>show persons</button>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}        
      </Aux>      
    );
  }
}

export default withClassName(App, css.App);
