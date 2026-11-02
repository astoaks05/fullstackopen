import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Results from './components/Results';

/* ===================================== */

const App = () => {
  // STATES ===============================
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  // EFFECT HOOK ==========================
  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data);
      })
  }, [])

  // EVENT HANDLERS =======================
  const handleFilter = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  }

  // RENDERING ============================
  return (
    <div>
      <h1>Countries</h1>
      <Search value = {filter} onChange = {handleFilter} />
      <Results countries = {countries} filter = {filter} />
    </div>
  )
}

export default App;