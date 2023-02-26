import {useState} from "react"
import { Temporaneo } from "../shared/Temporaneo"
import { useWeather } from "../hooks/useWeather"

export function Header(){
    const [city, setCity] = useState()
    const {onFetch, weather} = useWeather()
    return (
        <div className="w-full flex flex-col items-center pt-4">
            <div className="flex justify-center h-10 w-4/5 rounded-full overflow-hidden">
                <input className="w-4/5 pl-5 bg-cyan-100/60" placeholder="Inserisci la tua città come se dio abbaiasse" onChange={e=>setCity(e.target.value)}/>
                <button className="w-1/5 bg-blue-600 flex justify-center items-center gap-4" onClick={()=>onFetch(city)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    Search
                </button>
            </div>
            <Temporaneo weather={weather}/>
        </div>
    )
}

export default Header