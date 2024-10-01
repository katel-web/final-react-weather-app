import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function runFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  function runCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          <strong>°C</strong> |{" "}
          <a href="/" onClick={runFarenheit}>
            °F
          </a>{" "}
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature">
          {Math.round((props.celsius * 9) / 5) + 32}
        </span>
        <span className="unit">
          <a href="/" onClick={runCelsius}>
            °C
          </a>{" "}
          | <strong>°F</strong>{" "}
        </span>
      </span>
    );
  }
}
