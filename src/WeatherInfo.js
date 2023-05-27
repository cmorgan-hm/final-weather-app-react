import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {

    return(
<div>
  <h1>{props.data.name}</h1>

  <ul>
    <li>
      <FormattedDate date={props.data.date} />
    </li>
    <li>{props.data.description}</li>
  </ul>

  <div className="row">
    <div className="col-6">
      {" "}
      <span id="degree" className="degree">
        {" "}
        {Math.round(props.data.temperature)}
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
        <li>Humidity = {props.data.humidity}%</li>
        <li>Wind = {props.data.wind} km/h</li>
      </ul>
    </div>
  </div>
</div>
    );
}