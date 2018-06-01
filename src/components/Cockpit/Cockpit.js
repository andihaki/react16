import React from 'react';

import css from './Cockpit.css'
import Aux from '../../hoc/Aux'

const cockpit = (props) => {
    const classes = [];
    let btnClass = css.Button;

    if (props.showPersons){
        btnClass = [css.Button, css.Red].join(" ");
    }
    if (props.persons.length < 2){
      classes.push(css.red);
    }
    if (props.persons.length < 1){
      classes.push(css.italic);
    }

    return (
        <Aux>
            <h1 className={classes.join(" ")}>
                {props.appTitle}
            </h1>
            <button   
                className={btnClass}        
                onClick={props.clicked}
            >
                Switch Name
            </button>  
        </Aux>
    );
}

export default cockpit;