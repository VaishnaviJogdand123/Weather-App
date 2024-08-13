import React from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherDisplay.css';

const WeatherDisplay = ({ data }) => {
  const { name, main, weather, wind } = data;

  return (
    <div className="weather-display container mt-4">
      <div className="card text-center">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <WeatherIcon icon={weather[0].icon} className="my-3" />
          <p className="card-text">Temperature: <strong>{main.temp}°C</strong></p>
          <p className="card-text">Description: <strong>{weather[0].description}</strong></p>
          <p className="card-text">Humidity: <strong>{main.humidity}%</strong></p>
          <p className="card-text">Wind Speed: <strong>{wind.speed} m/s</strong></p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
