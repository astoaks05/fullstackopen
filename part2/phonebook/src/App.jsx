import AddNew from './components/AddNew';
import DisplayPeople from './components/DisplayPeople';
import Filter from './components/Filter';
import {useState, useEffect} from 'react';
import axios from 'axios';
import peopleService from './services/people';

const App = () => {
  const [persons, setPersons] = useState([
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    peopleService
      .getAll()
      .then(initialPeople => {
        setPersons(initialPeople);
      });
  }, []);

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
    
    const newPersonObject = {
      name: newName,
      number: newNumber
    }

    const samePerson = persons.find(
      person => person.name.toLowerCase() === newName.toLowerCase()
    ); //returns the person object that exists if you try to add the same person

    if (samePerson) {
      if (!window.confirm(`${newName} is already added to the phonebook. Would you like to update their number?`)) {
        return;
      }
      peopleService
        .update(newPersonObject, samePerson.id)
        .then(updatedPerson => {
          setPersons(
            persons.map((person) => {
              return person.id === updatedPerson.id ? updatedPerson : person
            })
          );
          setNewName('');
          setNewNumber('');
        })
    } else {
      peopleService
        .create(newPersonObject)
        .then(newPeople => {
          setPersons(persons.concat(newPeople));
          setNewName('');
          setNewNumber('');
        })
    }
  }

  const handleDeletion = (id) => {
    const person = persons.filter(person => person.id === id);

    if (!window.confirm(`Are you sure you want to delete ${person[0].name}`)) {
            return;
          }

    axios
      .delete(`http://localhost:3001/persons/${id}`)
      .then(
        () => {
          setPersons(persons.filter(person => person.id !== id))
        }
      )
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
      <DisplayPeople persons = {persons} newFilter = {newFilter} handleDeletion = {handleDeletion}/>
    </div>
  )
}

export default App;