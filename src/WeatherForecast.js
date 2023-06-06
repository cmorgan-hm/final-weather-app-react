import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState();

 

useEffect(() => {
  setLoaded(false);
}, [props.name]);

  function handleResponse(response) {
    console.log(response);
    setForecast(response.data.daily);

    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="ForecastContainer">
        <div className="row">
          {forecast.map(function(dailyForecast, index) {
            function maxTemp() {
              let temperature = Math.round(dailyForecast.temperature.maximum);
              return temperature;
            }
            function minTemp() {
              let temperature = Math.round(dailyForecast.temperature.minimum);
              return temperature;
            }

            function day() {
              let date = new Date(dailyForecast.time * 1000);
              let day = date.getDay();
              let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

              return days[day];
            }
            let src = `/images/${dailyForecast.condition.icon}.gif`;
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <div className="forecast-day"> {day()} </div>
                  <img src={src} alt="description" width="40px"></img>
                  <div>
                    <span className="forecast-max">{maxTemp()}°</span>{" "}
                    <span className="forecast-min">{minTemp()}°</span>
                  </div>
                </div>
              );
            }
            
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "3do9a264fbe8b4ta0705174c4f40d76f";
    let cityName = props.name;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${cityName}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
