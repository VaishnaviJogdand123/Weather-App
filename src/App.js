import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [theme, setTheme] = useState('light');

  const fetchWeather = async (city) => {
    const apiKey = '1a7cf7539a899b59f8c1283ad8ce359d'; // Replace with your OpenWeatherMap API key
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      setError('City not found or network error');
      setWeatherData(null);
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app-container ${theme}`} >
      <ThemeToggle onToggle={toggleTheme} theme={theme} />
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeather} />
      {error && <p className="error-message">{error}</p>}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
};

export default App;
