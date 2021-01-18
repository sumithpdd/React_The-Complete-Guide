import React from 'react';

const Person=(props) =>{

    return (
        <div>
    <p onClick={props.click}>I'm a {props.name} and i am {props.age} old!</p>
    <p>{props.children}</p>
    </div>)
};
export default Person;