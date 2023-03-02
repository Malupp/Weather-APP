import { useState } from "react";
import store from "../store/store";
import {storeWeather, storeWeekly} from "../store/store"
export function useWeather (){
    const [weather, setWeather] = useState()
    const [weekly, setWeekly] = useState([])

    
    const fetchWeather = async (city) =>{
        try {
            const data = await(await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2e6be37319e51ee1460be96d8af8a3c5`)).json();
            const {list} = await(await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=2e6be37319e51ee1460be96d8af8a3c5`)).json();
            // const arr = []
            // week.list.map((el)=>{
            //     if(el.dt_txt.slice(11,13)==="18"){
            //         arr.push({
            //             day: el.dt_txt.slice(8,10),
            //             hour: el.dt_txt.slice(11,13),
            //             tempMax: Math.round(el.main.temp_max-273.15),
            //             tempMin: Math.round(el.main.temp_min-273.15),
            //             weather: el.weather[0].main
            //         })
            //         setWeekly(arr)
            //     }
            // })
            setWeather({
                city: data.name,
                temperature: Math.ceil(data.main.temp),
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                weather: data.weather[0].main,
                wind: data.wind.speed
            })
            store.dispatch(storeWeather({
                city: data.name,
                temperature: Math.ceil(data.main.temp),
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                weather: data.weather[0].main,
                wind: data.wind.speed
            }))
            store.dispatch(storeWeekly(list))
        } catch (error) {
            alert("City not found")
            setWeather({})
        }
    }

    return {
            onFetch: fetchWeather,
            weather: weather,
        }
}