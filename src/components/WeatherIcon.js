import React from 'react';

const WeatherIcon = ({ icon }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;
  return <img src={iconUrl} alt="Weather icon" />;
};

export default WeatherIcon;
