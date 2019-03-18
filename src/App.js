import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  //useState() prima initial state kao argument
  //useState() UVIJEK vraca dva elementa:
  //1. updated state, fja koja omogucava update state-a
  //array destructuring koristimo [ updatedState, fja]
  state = {
    persons: [
      { name: "Max", age: 27 },
      { name: "Joe", age: 33 },
      { name: "Monee", age: 23 }
    ],
    otherState: "some other value",
    showPersons: false,
    buttonName: "Prikaži osobe"
  };

  switchNameHandler = newName => {
    // console.log("Was clicked");
    // NOT HOW ITS DONE!!! this.state.persons[0].name = "Novo ime";
    this.setState({
      persons: [
        { name: newName, age: 18 },
        { name: "Joe", age: 0 },
        { name: "Mikica", age: 66 }
      ]
    });
  };

  togglPersonHandler = () => {
    const doesShow = this.state.showPersons;
    let IbuttonValue = "Prikaži osobe";
    if (!doesShow) {
      IbuttonValue = "Sakrij osobe";
    }
    this.setState({
      showPersons: !doesShow,
      buttonName: IbuttonValue
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          >
            My hobbies: Racing
          </Person>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>React JS...</h1>
        <p>Zaista.</p>
        <button style={style} onClick={this.togglPersonHandler}>
          {this.state.buttonName}
        </button>
        {persons}
      </div>
    );
  }

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Test tekst'));
}

export default App;
