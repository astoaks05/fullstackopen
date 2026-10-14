import AddNew from './components/AddNew';
import DisplayPeople from './components/DisplayPeople';
import Filter from './components/Filter';
import {useState, useEffect} from 'react';
import axios from 'axios';




const App = () => {
  const [persons, setPersons] = useState([
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(promise => {
        setPersons(promise.data);
      })
  })

  const handleNewFilter = (event) => {
    setNewFilter(event.target.value);
  }

  const handleNewName = (event) => {
    setNewName(event.target.value);
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const handleNewPerson = (event) => {
    event.preventDefault();
    const samePerson = persons.find(
      person => person.name.toLowerCase() === newName.toLowerCase()
    ); //returns the person object that exists if you try to add the same person

    if (samePerson) {
      alert(`${samePerson.name} is already added to the phonebook.`); // returns undefined otherwise
    } else {
      setPersons(
        persons.concat(
          {
            name: newName,
            number: newNumber,
            id: persons.length + 1
          }
        )
      )
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value = {newFilter} onChange = {handleNewFilter}/>
      <AddNew 
        formSubmit = {handleNewPerson}
        nameValue = {newName}
        nameOnChange = {handleNewName}
        numberValue = {newNumber}
        numberOnChange = {handleNewNumber} />
      <DisplayPeople persons = {persons} newFilter = {newFilter} />
    </div>
  )
}

export default App;