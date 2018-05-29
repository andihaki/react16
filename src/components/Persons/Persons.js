import React from 'react';

import Person from './Person/Person'

const persons = (props) => {
    return (
        // {name, age} = desctructuring
        // sama juga dengan person.name, person.age    
        props.persons.map( ({id, name, age}, index) => {
            return (                
                <Person 
                    key={id}
                    name={name} 
                    age={age}
                    click={() => props.clicked(index)}
                    changed={(event) => props.changed(event, id)}
                />                
            )
        })
    );
};

export default persons;