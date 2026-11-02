const Results = ({ countries, filter }) => {
    if (countries.length === 0) {
        return (
            <p>Loading...</p>
        );
    }

    const matches = countries.filter(country => 
        country.name.official.toLowerCase().includes(filter.toLowerCase())
    );

    if (matches.length === 0) {
        return (
            <p>No matches.</p>
        )
    }

    return (
        <div>
            {matches.map((country) => (
                <p key = {country.cca3} >{country.name.official}</p>
            ))}
        </div>
    )
}

export default Results;