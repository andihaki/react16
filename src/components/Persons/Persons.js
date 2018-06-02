import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props){
        super(props);
        this.lastPersonRef = React.createRef();
        console.log('constructor persons', props);
    }

    componentWillMount(){
        console.log('componentWillMount persons');
    }

    componentDidMount(){
        console.log('componentDidMount persons');
        this.lastPersonRef.current.focus();
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps persons', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('shouldComponentUpdate persons', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons
    //         || nextProps.changed !== this.props.changed
    //         || nextProps.click !== this.props.click;
    // }

    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate persons', nextProps, nextState);        
    }

    componentDidUpdate(){
        console.log('componentDidUpdate persons');     
        this.lastPersonRef.current.focus();   
    }

    render(){
        console.log('render persons');
        return (
            // {name, age} = desctructuring
            // sama juga dengan person.name, person.age    
            this.props.persons.map( ({id, name, age}, index) => {
                return (                
                    <Person 
                        key={id}
                        name={name} 
                        position={index}
                        age={age}
                        ref={this.lastPersonRef}
                        click={() => this.props.clicked(index)}
                        changed={(event) => this.props.changed(event, id)}
                    />                
                )
            })
        );
    }
};

export default Persons;