import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';

export default function WeatherInfo({ data }) {
  return (
    <div className="WeatherInfo">
      <h1>{data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={data.date} />
        </li>
        <li className="text-capitalize">{data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex canvas">
            <div>
              <WeatherIcon code={data.icon} size={52} />
            </div>

            <div>
              <WeatherTemperature celsius={data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6 info">
          <ul>
            <li>Humidity: {data.humidity}%</li>
            <li>Wind: {data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
