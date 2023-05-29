import React from "react";
import FormattedDate from "./FormattedDate";
import "./App.css";
import Temperature from "./Temperature";

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
    <Temperature celsius={props.data.temperature} />
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