import React from "react";
import "./Weather.css";

export default function Weather(props) {
  let weatherData = {
    city: "St. Louis",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    date: "Friday, 11:00",
    humidity: 55,
    wind: 10,
    lowTemp: 53,
    currentTemp: 68,
  };
  return (
    <div className="Weather">
      <div className="my-weather-app-wrapper">
        <h1>Weather</h1>
        <div className="container">
          <form>
            <div className="row">
              <div className="col-5">
                <div className="mb-3">
                  <input
                    type="search"
                    placeholder="Enter the city name"
                    className="form-control"
                    aria-describedby="emailHelp"
                    autofocus
                    autocomplete="off"
                  />
                </div>
              </div>
              <div className="col-3">
                <button type="submit" className="btn btn-primary w-100">
                  Search
                </button>
              </div>
              <div className="col-3">
                <button className="btn btn-success w-100">Current City</button>
              </div>
            </div>
          </form>

          <div className="row">
            <div className="col-5">
              <h2>{weatherData.city}</h2>
              <div className="today-details-header">
                <span className="current-temp">{weatherData.currentTemp}</span>
                <span className="units"> °F</span>
              </div>
            </div>

            <div className="col-6">
              <ul className="current-conditions">
                <img
                  src={weatherData.imgUrl}
                  alt="weather condition"
                  className="float-left"
                />

                <li>{weatherData.date}</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}Km/H</li>
                <li></li>
                <li>L: {weatherData.lowTemp}°</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
