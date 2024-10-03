import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    let forecastDay = days[day];
    return `${forecastDay}`;
  }

  return (
    <div>
      <div className="WeathreForecast-Day">{day()}</div>
      <div className="WeatherForecast-Icon">
        <img src={props.data.condition.icon_url} />
      </div>
      <div className="WeatherForecastTemperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}°
        </span>{" "}
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}°
        </span>
      </div>
    </div>
  );
}
