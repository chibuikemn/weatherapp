// src/components/SearchBar.jsx
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
      <button 
        type="button" 
        onClick={() => onSearch(null)} // null triggers geolocation
        className="location-button"
      >
        Use My Location
      </button>
    </form>
  );
};

export default SearchBar;