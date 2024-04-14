import React, { useState } from 'react';
import axios from 'axios';
import { MagnifyingGlass } from 'react-loader-spinner';

export default function Search() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const units = 'metric';
  const apiKey = '4e2ef63817950c7df54e72f923dae8f1';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  const handleSubmit = e => {
    e.preventDefault();
    if (city) {
      const queryCity = city;
      let capitalizedCity = `${queryCity[0].toUpperCase()}${queryCity.slice(
        1
      )}`;
      setCity(capitalizedCity);
      setWeather(true);
      setIsLoading(true);

      axios
        .get(url)
        .then(function (response) {
          const iconUrl = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
          setTemperature(response.data.main.temp);
          setDescription(response.data.weather[0].description);
          setHumidity(response.data.main.humidity);
          setWind(response.data.wind.speed);
          setIcon(iconUrl);
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error.message);
          setError(true);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      setMessage(true);
    }
  };

  const handleChange = e => {
    setCity(e.target.value);
  };

  const handleReset = () => {
    setCity('');
    setWeather(false);
    setError(false);
    setMessage(false);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#f2f2f1"
          color="#48484a"
        />
      ) : (
        <>
          <form className="Search" onSubmit={handleSubmit}>
            <input
              type="search"
              name="search"
              placeholder="Type a city..."
              onChange={handleChange}
              onInput={handleReset}
            />
            <input type="submit" value="Search" />
          </form>
          <br />
          {message && <b>Please type a city...</b>}
          {error && <b>Please type the correct city...</b>}
          {weather && !error && (
            <>
              <b>Current weather in {city}:</b>
              <ul className="weatherList">
                <li>Temperature: {Math.round(temperature)}°C</li>
                <li>Description: {description}</li>
                <li>Humidity: {humidity}%</li>
                <li>Wind: {wind}km/h</li>
                <li>
                  <img src={icon} alt={description} />
                </li>
              </ul>
            </>
          )}
        </>
      )}
    </>
  );
}
