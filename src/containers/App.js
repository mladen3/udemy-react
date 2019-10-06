import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit"

class App extends Component {
  state = {
    persons: [
      { id: 'bilo', name: "Joe", age: 33 },
      { id: 'sta', name: "Max", age: 27 },
      { id: 'unique', name: "Monee", age: 23 }
    ],
    otherState: "some other value",
    showPersons: false,
    buttonName: "Show persons"
  };

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />;
    }

    return (

      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglPersonHandler}
          buttonName={this.state.buttonName}/>
        {persons}
      </div>

    );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglPersonHandler = () => {
    const showingPersons = this.state.showPersons;
    let buttonText = "Prikaži osobe";
    if (!showingPersons) {
      buttonText = "Sakrij osobe";
    }
    this.setState({
      showPersons: !showingPersons,
      buttonName: buttonText
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


  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Test tekst'));
}

export default App;
