import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Person.css';
import Aux from '../../../hoc/Aux';
import withClassName from '../../../hoc/withClassName';
import { AuthContext } from '../../../containers/App';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElement = React.createRef();
        console.log('constructor person', props);
    }

    componentWillMount(){
        console.log('componentWillMount person');
    }

    componentDidMount(){
        console.log('componentDidMount person');
        if(this.props.position === 0){
            this.inputElement.current.focus();
        }
    }

    focus(){
        this.inputElement.current.focus();
    }
    
    render(){
        console.log('render person');
        return (        
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth ? <p>Logged In</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>This is {this.props.name} @ Spartaaa {this.props.age}</p>
                <p>{this.props.children}</p>
                <input 
                    ref={this.inputElement}                    
                    type="text" 
                    onChange={this.props.changed} value={this.props.name} />
            </Aux>
        );
    }
};

// jagain data type setiap props konsisten
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
}

export default withClassName(Person, css.Person);