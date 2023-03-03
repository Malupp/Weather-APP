import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faDroplet,
  faSun,
  faCloudSun,
  faCloudRain,
  faSnowflake,
  faSmog,
  faTemperatureArrowUp,
  faTemperatureDown,
  faWind,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ExpandMainCard from "./ExpandMainCard";
import { useSelector } from "react-redux";

export function MainCard() {
  /* Mapping an object in order to render the icon whether the main weather is Clear, Clouds etc... */
  const icons = {
    Clear: faSun,
    Clouds: faCloudSun,
    Rain: faCloudRain,
    Snow: faSnowflake,
    Mist: faSmog,
  };

  /* State used to expand main card in mobile version */
  const [expand, setExpand] = useState(false);
  const MainCardExpand = () => {
    setExpand(!expand);
  };
  /*Using Redux to pass data from store to main card */
  const weather = useSelector((state) => state.weather);
  return (
    <div className="border-card min-h-fit w-72 md:w-10/12 shadow-lg flex justify-center md:justify-evenly items-center mt-2 bg-[#e0f8fb]">
      {/* Left side */}
      <div className="mb-4 text-center flex flex-col">
        {weather?.city && <h1 className="text-3xl mt-4">{weather.city}</h1>}
        <div className="flex items-center gap-2 mt-4">
          {weather && (
            <FontAwesomeIcon
              className="md:flex text-8xl text-orange-500"
              icon={icons[weather.weather]}
            />
          )}
          {weather?.temperature && (
            <h1 className="text-8xl">{weather.temperature}</h1>
          )}
        </div>
        {weather?.weather && (
          <h1 className="text-xl mt-4">{weather.weather}</h1>
        )}
        {/* Read more */}
        <div className="flex flex-col mt-4 md:hidden">
          <p className={expand ? "hidden" : "visible"}>
            <i>Mostra di più</i>
          </p>
          <button
            className={expand ? "rotate-180" : "rotate-0"}
            onClick={MainCardExpand}
          >
            <FontAwesomeIcon
              className="text-4xl md-hidden"
              icon={faCaretDown}
            />
          </button>
        </div>
        {expand && <ExpandMainCard weather={weather} />}
      </div>
      {/* Right side */}
      <div>
        <div className="hidden md:flex mb-4 flex-col">
          <div className="flex text-2xl justify-center items-center mt-4 gap-1">
            {weather?.feelsLike && (
              <h2>
                Feels Like: {" "}
                <FontAwesomeIcon
                  className="text-orange-500"
                  icon={faTemperatureHalf}
                />
                {weather.feelsLike}°
              </h2>
            )}
          </div>
          <div className="flex text-2xl justify-center items-center mt-4 gap-1">
            <FontAwesomeIcon
              className="text-red-600"
              icon={faTemperatureArrowUp}
            />
            {weather?.tempMax && <h2>{weather.tempMax}°</h2>}
            <FontAwesomeIcon
              className="text-blue-600"
              icon={faTemperatureDown}
            />
            {weather?.tempMin && <h2>{weather.tempMin}°</h2>}
          </div>
          <div className="flex justify-center items-center mt-4 gap-1">
            <FontAwesomeIcon className="text-cyan-500" icon={faDroplet} />
            {weather?.humidity && (
              <h1 className="text-2xl">Humidity: {weather.humidity}%</h1>
            )}
          </div>
          <div className="flex justify-center items-center mt-4 gap-1">
            <FontAwesomeIcon icon={faWind} />
            {weather?.wind && (
              <h1 className="text-2xl">Wind: {weather.wind} Km/h</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
