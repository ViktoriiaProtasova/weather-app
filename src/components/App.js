import React, { useState, useEffect } from 'react';
import './App.css';
import Weather from './Weather';
import Footer from './Footer/Footer';
import CurrentCity from './CurrentCity';
import { MagnifyingGlass } from 'react-loader-spinner';

export default function App() {
  const [currentCityWeather, setCurrentCityWeather] = useState(null);

  useEffect(() => {
    CurrentCity(setCurrentCityWeather);
  }, []);

  return (
    <div className="App">
      <div className="container">
        {currentCityWeather ? (
          <Weather data={currentCityWeather} />
        ) : (
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
        )}
        <Footer />
      </div>
    </div>
  );
}
