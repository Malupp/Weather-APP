import { useEffect, useState } from "react";
import store from "../store/store";
import { storeWeather, storeWeekly } from "../store/store";
export function useWeather() {
  const [weather, setWeather] = useState();

  
  const fetchWeather = async (city) => {
    try {
      const data = await (
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2e6be37319e51ee1460be96d8af8a3c5`
        )
      ).json();
      const { list } = await (
        await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=2e6be37319e51ee1460be96d8af8a3c5`
        )
      ).json();
      setWeather({
        city: data.name,
        temperature: Math.ceil(data.main.temp),
        feelsLike: Math.ceil(data.main.feels_like),
        tempMin: Math.floor(data.main.temp_min),
        tempMax: Math.ceil(data.main.temp_max),
        humidity: data.main.humidity,
        weather: data.weather[0].main,
        wind: data.wind.speed,
      });
      store.dispatch(
        storeWeather({
          city: data.name,
          temperature: Math.ceil(data.main.temp),
          feelsLike: Math.ceil(data.main.feels_like),
          tempMin: Math.floor(data.main.temp_min),
          tempMax: Math.ceil(data.main.temp_max),
          humidity: data.main.humidity,
          weather: data.weather[0].main,
          wind: data.wind.speed,
        })
      );
      store.dispatch(storeWeekly(list));
    } catch (error) {
      alert("City not found");
      setWeather({});
    }
  };

  useEffect(() => {
    fetchWeather("Milano"); // Imposta "Milano" come città predefinita
  }, []);

  return {
    onFetch: fetchWeather,
    weather: weather,
  };
}
