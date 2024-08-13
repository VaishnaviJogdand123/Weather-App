import React, { useState } from 'react';
import './SearchBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity('');
  };

  return (
    <form class="d-flex" role="search" onSubmit={handleSubmit}>
    <input class="form-control me-2"
        type="search"   value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city" aria-label="Search"/>
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
    );
};

export default SearchBar;
{/*<form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button type="submit">Search</button>
       </form>
      */}