import React from 'react';
import './Person.css'

const person = ( props ) => {
    
    return (
        <div 
        className="Person"
        onClick={props.click}>
            <p>ja sam {props.name} stara {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;