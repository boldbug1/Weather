import { weatherObjectBuilder } from "./object.js";
import { API_KEY } from "../config.js";

export async function fetchWeatherFromAPI() {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}&units=metric`;

    const response = await fetch(url);

    if(!response.ok){
        throw new Error("Error",Error);
        return;
    }
    const data = await response.json();

    const weather_data = weatherObjectBuilder("London,UK",data.main.temp,data.main.feels_like,data.wind.speed,data.main.humidity);

    console.log(weather_data);
    
    return weather_data;
}   