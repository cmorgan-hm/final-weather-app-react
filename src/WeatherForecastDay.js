import React from "react";

export default function WeatherForecastDay(props){
    let src = `/images/${props.data.condition.icon}.gif`;

          function maxTemp() {
            let temperature = Math.round(props.data.temperature.maximum);
            return `${temperature}`;
          }
          function minTemp() {
            let temperature = Math.round(props.data.temperature.minimum);
            return `${temperature}`;
          }

          function day() {
            let date = new Date(props.data.time * 1000);
            let day = date.getDay();
            let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

            return days[day];
          }
    return (
      <div>
        {" "}
        <div className="forecast-day"> {day()} </div>
        <img src={src} alt="description" width="40px"></img>
        <div>
          <span className="forecast-max">{maxTemp()}°</span>{" "}
          <span className="forecast-min">{minTemp()}°</span>
        </div>
      </div>
    );
}