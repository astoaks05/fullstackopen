import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Results from './components/Results';

/* ===================================== */

const App = () => {
  // API KEYS =============================
  const weather_api_key = import.meta.env.VITE_WEATHER_KEY
  // STATES ===============================
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [displayCountry, setDisplayCountry] = useState(null);
  const [displayWeather, setDisplayWeather] = useState(null);

  // EFFECT HOOKS ==========================
  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data);
      })
  }, []);

  useEffect(() => {
    const matches = countries.filter(country => 
        country.name.official.toLowerCase().includes(filter.toLowerCase())
    );

    if (filter !== '' && matches.length === 1) {
      setDisplayCountry(matches[0]);
    }
  }, [countries, filter]);

  useEffect(() => {
    if (displayCountry) {
      const lat = displayCountry.latlng[0];
      const lng = displayCountry.latlng[1];
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${weather_api_key}`)
        .then(response => {
          setDisplayWeather(response.data);
          console.log(response.data);
        }
        )
    }
  }, [displayCountry]);

  // EVENT HANDLERS =======================
  const handleFilter = (event) => {
    event.preventDefault();
    setDisplayCountry(null);
    setDisplayWeather(null);
    setFilter(event.target.value);
  }

  const handleShow = (country) => {
    setDisplayCountry(country);
  }

  // RENDERING ============================
  return (
    <div>
      <h1>Countries</h1>
      <Search value = {filter} onChange = {handleFilter} />
      <Results countries = {countries} filter = {filter} handleShow = {handleShow} displayCountry = {displayCountry} displayWeather = {displayWeather} />
    </div>
  )
}

export default App;