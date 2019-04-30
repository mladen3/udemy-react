import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 'bilo', name: "Joe", age: 33 },
      { id: 'sta', name: "Max", age: 27 },
      { id: 'unique', name: "Monee", age: 23 }
    ],
    otherState: "some other value",
    showPersons: false,
    buttonName: "Prikaži osobe"
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

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

  nameChangeHandler = (event, id) => {
    const editedPersons = this.state.persons;
    const personIndex = editedPersons.findIndex(p => {
      return p.id === id;
    });
    editedPersons[personIndex].name = event.target.value;
    this.setState({
      persons: editedPersons
    });
  }

  render() {
    const style = {
      backgroundColor: "green",
      color: 'white',
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              personName={person.name}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />

          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (

      <div className="App">
        <h1>React JS...</h1>
        <p className={classes.join(' ')}>Zaista.</p>
        <button
          style={style}
          onClick={this.togglPersonHandler}>
          {this.state.buttonName}
        </button>
        {persons}
      </div>

    );
  }

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Test tekst'));
}

export default App;
