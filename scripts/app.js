import {fetchWeatherFromAPI} from './api.js'
const location = document.getElementById("location");
const tempContainer = document.getElementById("temp-container");
const windSpeedContainer = document.getElementById("wind-speed");
const humidityLevel = document.getElementById("humidity");
const feelsLikeContainer = document.getElementById("feels-like");
const weatherContainer = document.getElementById("weather-container");


async function renderWeather(){
    const weatherObj = await fetchWeatherFromAPI();

    location.innerHTML = weatherObj.location;
    tempContainer.innerHTML = weatherObj.tempreature_C;
    windSpeedContainer.innerHTML = weatherObj.windSpeed;
    humidityLevel.innerHTML = weatherObj.humidity;
    feelsLikeContainer.innerHTML = weatherObj.feels_like;
}

renderWeather();