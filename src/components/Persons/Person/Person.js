import React, { Component } from 'react';

import css from './Person.css'

class Person extends Component {
    constructor(props){
        super(props);
        console.log('constructor person', props);
    }

    componentWillMount(){
        console.log('componentWillMount person');
    }

    componentDidMount(){
        console.log('componentDidMount person');
    }
    render(){
        console.log('render person');
        return (        
            <div className={css.Person}>
                <p onClick={this.props.click}>This is {this.props.name} @ Spartaaa {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        );
    }
};

export default Person;