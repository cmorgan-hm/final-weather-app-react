import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="ForecastContainer">
      <div className="forecast-day"> Thu </div>
      <img src="/images/rain-day.gif" alt="description" width="40px"></img>
      <div>
        <span className="forecast-max">20°</span> <span className="forecast-min">10°</span>
      </div>
    </div>
  );
}
