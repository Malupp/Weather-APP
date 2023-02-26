export function Temporaneo({weather}){
    return (
        <div>
            {weather?.city && <h1>Città di {weather.city}</h1>}
            {weather?.temperature && <h1>Temperatura attuale: {weather.temperature}°</h1>}
            {weather?.tempMin && weather.tempMax && <h1>Temperatura minima: {weather.tempMin}°, Temperatura massima: {weather.tempMax}°</h1>}
            {weather?.humidity && <h1>Umidità attuale: {weather.humidity}%</h1>}
            {weather?.weather && <h1>Attualmente: {weather.weather}</h1>}
            {weather?.wind && <h1>Velocità del vento: {weather.wind} Km/h</h1>}
        </div>
    )
}