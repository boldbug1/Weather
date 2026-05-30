import { weatherObjectBuilder } from "./object.js";


export async function fetchWeatherFromAPI() {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Muzaffarpur,BR,IN&APPID=e8f09b47f3f957d8164b5105c509f5f7&units=metric";

    const response = await fetch(url);

    if(!response.ok){
        throw new Error("Error",Error);
        return;
    }
    const data = await response.json();

    const weather_data = weatherObjectBuilder("Muzaffarpur , Bihar",data.main.temp,data.main.feels_like,data.wind.speed,data.main.humidity);

    console.log(weather_data);
    
    return weather_data;
}   
