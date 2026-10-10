import {useState} from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      id: 0,
    }
  ]);
  const [newName, setNewName] = useState('');

  const handleNewName = (event) => {
    setNewName(event.target.value);
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
            id: persons.length + 1
          }
        )
      )
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {handleNewPerson}>
        <div>
          Name: <input value = {newName} onChange = {handleNewName} />
        </div>
        <button type = "submit">Add</button>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => 
          <p key = {person.id}>
            {person.name}
          </p>
        )}
      </div>
    </div>
  )
}

export default App;