import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faTemperatureArrowUp,
  faTemperatureDown,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
function ExpandMainCard() {
  const weather = useSelector(state => state.weather)
  return (
    <div>
      <div className="md:hidden flex mb-4 flex-col">
        <h1 className="text-2xl">Percepito:</h1>
        <div className="flex text-2xl justify-center items-center mt-4 gap-1">
          <FontAwesomeIcon
            className="text-red-600"
            icon={faTemperatureArrowUp}
          />
          {weather?.tempMax && <h2>{weather.tempMax}°</h2>}
          <FontAwesomeIcon className="text-blue-600" icon={faTemperatureDown} />
          {weather?.tempMin && <h2>{weather.tempMin}°</h2>}
        </div>
        <div className="flex justify-center items-center mt-4 gap-1">
          <FontAwesomeIcon className="text-cyan-500" icon={faDroplet} />
          {weather?.humidity && <h1 className="text-2xl">Umidità: {weather.humidity}</h1>}
        </div>
        <div className="flex justify-center items-center mt-4 gap-1">
          <FontAwesomeIcon icon={faWind} />
          {weather?.wind && <h1 className="text-2xl">Vento: {weather.wind}</h1>}
        </div>
      </div>
    </div>
  );
}

export default ExpandMainCard;
