import React, { useState} from "react";

export default function Temperature(props) {
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    function Fahrenheit(){
        return(props.celsius * 9) / 5 + 32
    }

    if (unit === "celsius") {
            return (
              <div>
                {" "}
                <span id="degree" className="degree">
                  {" "}
                  {Math.round(props.celsius)}
                </span>
                <span id="unit" className="units">
                  {" "}
                  <span className="unit">°C</span> |{" "}
                  <a
                    href="javascript:void(0)"
                    id="fahrenheit"
                    className="unit"
                    onClick={showFahrenheit}
                  >
                    {" "}
                    °F
                  </a>
                </span>
              </div>
            );
    } else {
         return (
           <div>
             {" "}
             <span id="degree" className="degree">
               {" "}
               {Math.round(Fahrenheit())}
             </span>
             <span id="unit" className="units">
               {" "}
               <a
                 href="javascript:void(0)"
                 className="unit"
                 onClick={showCelsius}
               >
                 °C
               </a>{" "}
               |{" "}
               <span id="fahrenheit" className="unit">
                 {" "}
                 °F
               </span>
             </span>
           </div>
         );
    }

}