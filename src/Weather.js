import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
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

  function search() {
    const apiKey = "9eca7aac0b071aa16e3cb063adba0785";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="weather-app">
          <form onSubmit={handleSubmit}>
            <div className="row search-section">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="look for a city..."
                  className="form-control"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3 ">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
