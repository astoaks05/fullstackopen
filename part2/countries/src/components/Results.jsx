const Results = ({ countries, filter }) => {
    if (countries.length === 0) {
        return (
            <p>Loading...</p>
        );
    }

    if (filter === '') {
        return (
            <p>Search for a country!</p>
        )
    }

    // Find countries matching our filter
    const matches = countries.filter(country => 
        country.name.official.toLowerCase().includes(filter.toLowerCase())
    );

    if (matches.length === 0) {
        return (
            <p>No matches.</p>
        )
    } else if (matches.length <= 10) {
        // When only one country matches
        if (matches.length === 1) {
            console.log(matches[0]);
            return (
                <div>
                    <h1>{matches[0].name.common}</h1>
                    <p>Capital: {matches[0].capital} </p>
                    <p>Area: {matches[0].area}</p>
                    <h2>Languages</h2>
                    <ul>
                        {Object.entries(matches[0].languages ?? {}).map(([code, language]) => (
                            <li key = {code}>{language}</li>                )
                            )}
                    </ul>
                    <img 
                        src={matches[0].flags.png}
                        alt={matches[0].flags.alt || `Flag of ${matches[0].name.common}`}
                    />
                </div>
            )
        }
        // More than one, less than 10 matches
        return (
            <div>
                {matches.map((country) => (
                    <p key = {country.cca3} >{country.name.common}</p>
                ))}
            </div>
        )
    } else {
        // More than 10 matches
        return (
            <p>Try narrowing down your search.</p>
        )
    }
}

export default Results;