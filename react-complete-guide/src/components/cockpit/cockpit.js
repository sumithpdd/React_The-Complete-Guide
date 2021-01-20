import React from 'react';
import classes from './cockpit.css';

import styled from 'styled-components';
const StyledButton = styled.button` 
    background-color:${props => props.alt ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    
    &:hover {
      background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
      color: black;
    }
`;

const cockpit = (props) => {
    let classes = []; //['red','bold'].join(' ')
    if (props.persons.length <= 2) {
        classes.push('red');
    }
    if (props.persons.length <= 1) {
        classes.push('bold');
    }
    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I am a React APP</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <StyledButton alt={props.showPersons}
                onClick={props.clicked}>Toggle Persons</StyledButton>
        </div>
    );
}
export default cockpit;