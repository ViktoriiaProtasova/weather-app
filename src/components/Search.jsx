import React, { useState } from 'react';

export default function Search() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    const city = e.target.elements.search.value;
    let capitalizedCity = `${city[0].toUpperCase()}${city.slice(1)}`;

    setCity(capitalizedCity);

    if (city) {
      setWeather(true);
    }
  };

  const handleReset = () => {
    setCity('');
    setWeather(false);
  };

  return (
    <>
      <h1>Weather Search Engine</h1>
      <form className="Search" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          placeholder="Type a city..."
          onInput={handleReset}
        />
        <input type="submit" value="Search" />
        {weather && (
          <p>
            It is currently {Math.round(Math.random() * (30 - 0 + 1) + 0)}°C in{' '}
            {city}
          </p>
        )}
      </form>
    </>
  );
}
