import {fetchWeatherFromAPI} from './api.js'
const locationCard = document.getElementById("location-card");
const tempContainer = document.getElementById("temp-container");
const windSpeedContainer = document.getElementById("wind-speed");
const humidityLevel = document.getElementById("humidity");
const feelsLikeContainer = document.getElementById("feels-like");
const weatherContainer = document.getElementById("weather-container");
const locationContainer = document.getElementById("location-inpt-container");
const locationInput = document.getElementById("location-inpt");

renderWeather();

async function renderWeather(location){
    const weatherObj = await fetchWeatherFromAPI(location);
    locationCard.innerHTML = weatherObj.location;
    tempContainer.innerHTML = weatherObj.tempreature_C;
    windSpeedContainer.innerHTML = weatherObj.windSpeed;
    humidityLevel.innerHTML = weatherObj.humidity;
    feelsLikeContainer.innerHTML = weatherObj.feels_like;
}

locationContainer.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = locationInput.value;
    renderWeather(location);

})
