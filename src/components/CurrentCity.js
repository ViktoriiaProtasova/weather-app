import axios from 'axios';

function currentPosition(position, setWeatherData) {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  axios
    .get(url)
    .then(response => {
      const weatherData = response.data;
      setWeatherData(weatherData);
    })
    .catch(error => {
      console.error('Error fetching the weather data: ', error);
    });
}

export default function CurrentCity(setWeatherData) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => currentPosition(position, setWeatherData),
      error => console.error('Error getting the geolocation: ', error)
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
}
