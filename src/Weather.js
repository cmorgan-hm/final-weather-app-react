import React from "react";

export default function Weather() {
    return (
      <div className="Weather">
     <div className="row">
            <div className="col-9">
<input type="search" placeholder="look for a city..." className="form-control" />
</div>
<div className="col-3 ">
    <input type="submit" value="search" className="btn btn-primary"  />
</div>
</div>
        <h1>Berlin</h1>

        <ul>
          <li>
            Last updated at <span> today </span>
          </li>
          <li>Overcast clouds</li>
        </ul>

        <div className="row">
          <div className="col-6">16° C|F</div>
          <div className="col-6">
            <ul>
              <li>Humidity = 70%</li>
              <li>Wind = 6.17 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}