const Results = ({ countries, filter, handleShow, displayCountry, displayWeather }) => {
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

    if (displayCountry && displayWeather) {
        return (
            <div>
                <h1>{displayCountry.name.common}</h1>
                    <p>Capital: {displayCountry.capital} </p>
                    <p>Area: {displayCountry.area}</p>
                    <h2>Languages</h2>
                    <ul>
                        {Object.entries(displayCountry.languages ?? {}).map(([code, language]) => (
                            <li key = {code}>{language}</li>                )
                            )}
                    </ul>
                    <img 
                        src={displayCountry.flags.png}
                        alt={displayCountry.flags.alt || `Flag of ${displayCountry.name.common}`}
                    />
                    <h1>Weather in {displayCountry.capital}</h1>
                    <p>Temperature: {displayWeather.main.temp} degrees Celcius</p>
                    <img src={`https://openweathermap.org/img/wn/${displayWeather.weather[0].icon}@2x.png`}></img>
                    <p>Wind: {displayWeather.wind.speed} m/s</p>
            </div>
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
                    {
                        displayWeather?
                        <div>
                            <h1>Weather in {displayCountry.capital}</h1>
                            <p>Temperature: {displayWeather.main.temp} degrees Celcius</p>
                            <img src={`https://openweathermap.org/img/wn/${displayWeather.weather[0].icon}@2x.png`}></img>
                            <p>Wind: {displayWeather.wind.speed} m/s</p>
                        </div>
                        :
                        <p>Loading weather report... </p>
                    }
                </div>
            )
        }
        // More than one, less than 10 matches
        return (
            <div>
                {matches.map((country) => (
                    <div key = {country.cca3}>
                        <p>{country.name.common}</p> 
                        <button id = {country} onClick = {() => handleShow(country)}>Show</button>  
                    </div> 
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