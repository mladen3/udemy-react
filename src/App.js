import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = ( props ) => {
  //useState() prima initial state kao argument
  //useState() UVIJEK vraca dva elementa: 
  //1. updated state, fja koja omogucava update state-a
  //array destructuring koristimo [ updatedState, fja]
  const [personsState, setPersonsState] = useState({
      persons: [
        { name: 'Max', age: 27 },
        { name: 'Joe', age: 33 },
        { name: 'Monee', age: 23 }
      ]
    });

    const [otherState, setOtherState] = useState('some other state');

    console.log(personsState, otherState);

    const switchNameHandler = () => {
      // console.log("Was clicked");
      // NOT HOW ITS DONE!!! this.state.persons[0].name = "Novo ime";
      setPersonsState( {
        persons: [
          {name: 'Max', age: 18},
          {name: 'Joe', age: 0},
          {name: 'Mikica', age: 66}
        ]
      });
    }

    return (
      <div className="App">
        <h1>React JS...</h1>
        <p>Zaista.</p>
        <button onClick={switchNameHandler}>Switch name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My hobbies: Racing</Person>
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Test tekst'));
  }


export default app;