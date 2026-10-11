const DisplayPeople = ({persons, newFilter}) => {
    return (
        <div>
            <h2>People</h2>
            {persons.map(person => {
                if (person.name.toLowerCase().includes(newFilter.toLowerCase())) {
                    return (
                        <p key = {person.id}>
                            {person.name}: {person.number}
                        </p>
                    )
                }
            })}
        </div>
    )
}

export default DisplayPeople;