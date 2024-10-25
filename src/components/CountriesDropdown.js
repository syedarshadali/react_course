import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CountriesDropdown = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {

    // IIFE (Immediately Invoked Function Expression),
    (async () => {
      try {
        const resp = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(resp.data);
        console.log(resp.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    })();
  }, []);

  // Handle country selection
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    console.log('Selected Country:', event.target.value);
  };

  return (
    <div>
      <h2>Select a Country</h2>
      <select onChange={handleCountryChange}>
      {
        countries.map( (country, index) => (
          <option key={index} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      
      </select>
    
      <h3>Selected Country: {selectedCountry}</h3>
    
    </div>
  );
};

export default CountriesDropdown;

