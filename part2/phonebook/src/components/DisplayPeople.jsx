import axios from 'axios';

const DisplayPeople = ({persons, newFilter, handleDeletion}) => {
    return (
        <div>
            <h2>People</h2>
            {persons.map(person => {
                if (person.name.toLowerCase().includes(newFilter.toLowerCase())) {
                    return (
                        <div key = {person.id}>
                            <p>
                                {person.name}: {person.number}
                            </p>
                            <button onClick = {() => handleDeletion(person.id)}>Delete</button>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default DisplayPeople;