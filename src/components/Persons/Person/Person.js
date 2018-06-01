import React, { Component } from 'react';

import css from './Person.css';
import Aux from '../../../hoc/Aux';
import withClassName from '../../../hoc/withClassName';

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
            <Aux>
                <p onClick={this.props.click}>This is {this.props.name} @ Spartaaa {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        );
    }
};

export default withClassName(Person, css.Person);