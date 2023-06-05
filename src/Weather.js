import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      name: response.data.city,
      description: response.data.condition.description,
    });
      let backgroundPattern = response.data.condition.icon;
    let background = document.getElementById("background");
    background.className = "";
    background.classList.add(backgroundPattern);
  }

  function search() {
   const apiKey = `3do9a264fbe8b4ta0705174c4f40d76f`;
   let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
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
              <div className="col-8 ">
                <input
                  type="search"
                  placeholder="look for a city..."
                  className="form-control"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-4 ">
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
        <WeatherForecast city={weatherData.name}/>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
