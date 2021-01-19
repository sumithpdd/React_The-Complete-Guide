import React from 'react';
import './Person.css';

const Person = (props) => {

    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and i am {props.age} old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>)
};
export default Person;