import React, { useState } from 'react';

const CascadingDropdown = () => {
  const countryOptions = {
    Pakistan: ['Karachi', 'Lahore', 'Islamabad'],
    India: ['Mumbai', 'Delhi', 'Bangalore'],
    Bangladesh: ['Dhaka', 'Chittagong', 'Khulna'],
  };

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCity(''); // Reset city when country changes
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className="cascading-dropdown-container">
      <h3>Select a Country and City:</h3>

      <div>
        <label>Country: </label>
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">-- Select a country --</option>
          {Object.keys(countryOptions).map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>City: </label>
        <select value={selectedCity} onChange={handleCityChange} disabled={!selectedCountry}>
          <option value="">-- Select a city --</option>
          {selectedCountry &&
            countryOptions[selectedCountry].map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
        </select>
      </div>

      {selectedCountry && selectedCity && (
        <p>
          You selected {selectedCity}, {selectedCountry}
        </p>
      )}
    </div>
  );
};

export default CascadingDropdown;
