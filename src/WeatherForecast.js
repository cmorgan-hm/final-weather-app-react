import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState();

 useEffect(() => {
setLoaded(false);
 }, [props.city.name]);



  function handleResponse(response) {
  
    setForecast(response.data.daily);

    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="ForecastContainer">
        <div className="row">
          {forecast.map(function(dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
              
        </div>
      </div>
    );
  } else {
    let apiKey = "3do9a264fbe8b4ta0705174c4f40d76f";
    
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city.name}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
