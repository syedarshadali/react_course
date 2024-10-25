import React, { useState } from 'react';

const CascadingDropdown = () => {
  const countryOptions = {
    Pakistan: ['Karachi', 'Lahore', 'Islamabad'],
    India: ['Mumbai', 'Delhi', 'Bangalore'],
    Bangladesh: ['Dhaka', 'Chittagong', 'Khulna'],
  };

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  // Handle country change
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCity(''); // Reset city when country changes
  };

  // Handle city change
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div>
      <h3>Select a Country and City:</h3>
      <form className="form-container">
        <div className="form-group">
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
        <div className="form-group">
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
      
      </form>    
    </div>
  );
}; export default CascadingDropdown;
