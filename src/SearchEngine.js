import React, { useState } from "react";
import axios from "axios";

import "./styles.css";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2236c7e355f68293390c37c68fbd7525&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} />
      <input type="submit" />
    </form>
  );

  if (loaded) {
    return (
      <div className="WeatherSearch">
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}℃</li>
          <li> Description: {weather.description}</li>
          <li>Wind: {Math.round(weather.wind)}mph</li>
          <li>Humidity: {weather.humidity}% </li>
          <li>
            {" "}
            <img src={weather.icon} alt={weather.description} />{" "}
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
