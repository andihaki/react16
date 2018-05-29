import React from 'react';

import css from './Cockpit.css'

const cockpit = (props) => {
    const classes = [];
    let btnClass = "";

    if (props.showPersons){
        btnClass = css.Red;
    }
    if (props.persons.length < 2){
      classes.push(css.red);
    }
    if (props.persons.length < 1){
      classes.push(css.italic);
    }

    return (
        <div className={css.Cockpit}>
            <h1 className={classes.join(" ")}>
                {props.appTitle}
            </h1>
            <button   
                className={btnClass}        
                onClick={props.clicked}
            >
                Switch Name
            </button>  
        </div>
    );
}

export default cockpit;