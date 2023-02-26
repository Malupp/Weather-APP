import { useState } from "react";

export function useWeather (){
    const [weather, setWeather] = useState()
    
    const fetchWeather = async (city) =>{
        try {
            const data = await(await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2e6be37319e51ee1460be96d8af8a3c5`)).json();
            setWeather({
                city: data.name,
                temperature: Math.ceil(data.main.temp),
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                weather: data.weather[0].main,
                wind: data.wind.speed
            })
        } catch (error) {
            alert("City not found")
            setWeather({})
        }
    }

    return {
            onFetch: fetchWeather,
            weather: weather
        }
}