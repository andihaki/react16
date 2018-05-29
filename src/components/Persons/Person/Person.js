import React from 'react';

import css from './Person.css'

const person = (props) => {
    return (        
        <div className={css.Person}>
            <p onClick={props.click}>This is {props.name} @ Spartaaa {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;