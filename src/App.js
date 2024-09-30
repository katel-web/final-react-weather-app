import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://katelemass.com/" target="_blank" rel="noreferrer">
            Kate Lemass
          </a>{" "}
          and is open-sourced{" "}
          <a
            href="https://github.com/katel-web/final-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
