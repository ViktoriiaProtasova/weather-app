import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';
import { MagnifyingGlass } from 'react-loader-spinner';
import { FaSearchLocation } from 'react-icons/fa';

export default function Weather({ data }) {
  const [weatherData, setWeatherData] = useState(data);
  const [city, setCity] = useState(data.name);

  useEffect(() => {
    setWeatherData(data);
  }, [data]);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log();
    if (event.target[0].value === '') {
      alert('Please, type a city..');
    }
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <button type="submit" className="btn btn-primary w-100">
                <FaSearchLocation />
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <div className="loaderWrapper">
        <MagnifyingGlass
          className="magnifyingGlass"
          visible={true}
          height="80"
          width="80"
          ariaLabel="magnifying-glass-loading"
          glassColor="#f2f2f1"
          color="#48484a"
        />
      </div>
    );
  }
}
