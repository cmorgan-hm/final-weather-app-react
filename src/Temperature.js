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
                  <button
                    
                    id="fahrenheit"
                    className="unit active"
                    onClick={showFahrenheit}
                  >
                    {" "}
                    °F
                  </button>
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
               <button
                 
                 className="unit active"
                 onClick={showCelsius}
               >
                 °C
               </button>{" "}
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