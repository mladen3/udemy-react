import React from 'react';
import './Person.css'

const person = ( props ) => {
    return (
        <div className="Person">
            <p>ja sam {props.name} stara {props.age}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;