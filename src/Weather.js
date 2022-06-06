import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = "30d8dcf8c5a32b629f0453f6b9714950";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&unites=metric`;
  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from Weather App</h2>;
}
