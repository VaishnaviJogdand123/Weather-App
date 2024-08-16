import React, { useEffect, useRef, useState } from "react";
import "./WeatherDisplay.css";
import clear_icon from "../assets/images/clear.png";
import cloud_icon from "../assets/images/cloud.png";
import drizzle_icon from "../assets/images/drizzle.png";
import rain_icon from "../assets/images/rain.png";
import snow_icon from "../assets/images/snow.png";
import humidity_icon from "../assets/images/humidity.png";
import wind_icon from "../assets/images/wind.png";
import search_icon from "../assets/images/search.png";

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);
  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const inputRef=useRef()

  const search = async (city) => {
    if( city ===''){
      alert('Enter City Name');
      return;
    }
    try {
      const apiKey = "1a7cf7539a899b59f8c1283ad8ce359d";
      if (!apiKey) {
        throw new Error("API key is missing");
      }
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();

      if(!response.ok){
        alert(data.message);
        return;

      }
      console.log("Weather data:", data);
      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temprature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    search("London");
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search" />
        <img src={search_icon} alt="Search" onClick={()=>search(inputRef.current.value)} />
      </div>
    
      {weatherData ? (
        <>
          <img src={weatherData.icon} alt="Weather" className="weather-icon" />
          <p className="temp">{weatherData.temprature}°C</p>
          <p className="location">{weatherData.location}</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="Humidity" />
              <div>
                <p>{weatherData.humidity} %</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="Wind" />
              <div>
                <p>{weatherData.windSpeed} km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
