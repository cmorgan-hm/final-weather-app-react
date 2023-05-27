import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      name: response.data.name,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="weather-app">
          <div className="row search-section">
            <div className="col-9">
              <input
                type="search"
                placeholder="look for a city..."
                className="form-control"
              />
            </div>
            <div className="col-3 ">
              <input type="submit" value="search" className="btn btn-primary" />
            </div>
          </div>
          <h1>{weatherData.name}</h1>

          <ul>
            <li>
              <FormattedDate date={weatherData.date}/>
            </li>
            <li>{weatherData.description}</li>
          </ul>

          <div className="row">
            <div className="col-6">
              {" "}
              <span id="degree" className="degree">
                {" "}
                {Math.round(weatherData.temperature)}
              </span>
              <span id="unit" className="units">
                {" "}
                <a href="#" id="celsius" className="unit">
                  °C
                </a>{" "}
                |{" "}
                <a href="#" id="fahrenheit" className="unit">
                  {" "}
                  °F
                </a>
              </span>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity = {weatherData.humidity}%</li>
                <li>Wind = {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "9eca7aac0b071aa16e3cb063adba0785";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading...";
  }
}
