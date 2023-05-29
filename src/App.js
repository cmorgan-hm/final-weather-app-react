import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          Designed and{" "}
          <a
            href="https://github.com/cmorgan-hm/final-weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            coded{" "}
          </a>{" "}
          by{" "}
          <a
            href="https://frabjous-croissant-f0cae0.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Hasti Maghsoodi
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
