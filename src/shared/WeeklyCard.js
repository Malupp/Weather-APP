import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faTemperatureArrowUp,
  faTemperatureDown,
  faBolt,
  faSnowflake,
  faSmog,
  faCloudShowersHeavy,
  faCloudSun,
  faCloudRain,
} from "@fortawesome/free-solid-svg-icons";
import cardsData from "../data/cardsData.json";

function WeeklyCard() {
  const icons = {
    faSun,
    faCloudSun,
    faCloudRain,
    faBolt,
    faSnowflake,
    faSmog,
    faCloudShowersHeavy,
  };
  return (
    <div className="flex md:flex-row flex-col flex-wrap">
      {/* single card component */}
      {cardsData.map((card) => (
        <div
          key={card.day}
          className="border-card mx-6 my-6 h-40 w-40 shadow-lg  justify-center items-center hover:scale-125 bg-[#e0f8fb]"
        >
          <div className="text-center">
            <h1 className="text-sm mb-4">{card.day}</h1>
            <FontAwesomeIcon
              className="text-3xl text-orange-500"
              icon={icons[card.icon]}
            />
            <h2 className=" mt-4">{card.condition}</h2>
            <div className="flex text-2xl justify-center items-center mt-4 gap-1">
              <FontAwesomeIcon
                className="text-red-600"
                icon={faTemperatureArrowUp}
              />
              <h2>{card.highTemp}</h2>
              <FontAwesomeIcon
                className="text-blue-600"
                icon={faTemperatureDown}
              />
              <h2>{card.lowTemp}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeeklyCard;
