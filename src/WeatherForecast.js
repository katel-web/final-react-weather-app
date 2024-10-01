import React from "react";
import "./WeatherForecast.css";
export default function WeatherForecast(props) {
  console.log(props);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeathreForecast-Day">Thur</div>
          <div className="WeatherForecast-Icon">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
          </div>
          <div className="WeatherForecastTemperatures">
            <span className="WeatherForecast-temperature-max">19°</span>{" "}
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
