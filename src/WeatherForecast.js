import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let  [forecast, setForecast] = useState();

  function handleResponse(response) {
    console.log(response);
    setForecast(response.data.daily);
    
    setLoaded(true);
  }

  if (loaded) {
    let src = `/images/${forecast[0].condition.icon}.gif`
     return (
       <div className="ForecastContainer">
         <div className="row">
           <div className="col">
             <div className="forecast-day"> Thu </div>
             <img
               src= {src}
              
               alt="description"
               width="40px"
             ></img>
             <div>
               <span className="forecast-max">
                 {forecast[0].temperature.maximum}°
               </span>{" "}
               <span className="forecast-min">
                 {forecast[0].temperature.minimum}°
               </span>
             </div>
           </div>
         </div>
       </div>
     );
  } else {
     let apiKey = "3do9a264fbe8b4ta0705174c4f40d76f";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return null;
  }

 
 
}
