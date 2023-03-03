import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faSnowflake,
  faSmog,
  faCloudSun,
  faCloudRain,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function WeeklyCard() {
  const [week, setWeek] = useState([]);

  const weekly = useSelector((state) => state.weekly);

  const icons = {
    Clear: faSun,
    Clouds: faCloudSun,
    Rain: faCloudRain,
    Snow: faSnowflake,
    Mist: faSmog,
  };

  useEffect(() => {
    setWeek([]);

    const newWeek = [];

    weekly.forEach((el) => {
      if (el.dt_txt.slice(11, 13) === "18") {
        newWeek.push({
          day: el.dt_txt.slice(8, 10),
          hour: el.dt_txt.slice(11, 13),
          tempMax: Math.round(el.main.temp_max - 273.15),
          tempMin: Math.round(el.main.temp_min - 273.15),
          weather: el.weather[0].main,
        });
      }
    });

    setWeek(newWeek);
  }, [weekly]);

  return (
    <div className="flex md:flex-row flex-col flex-wrap justify-center">
      {/* single card component */}
      {week.map((card) => (
        <div
          key={card.day}
          className="border-card mx-6 my-6 h-40 w-40 shadow-lg  justify-center items-center hover:scale-125 bg-[#e0f8fb]"
        >
          <div className="text-center">
            <h1 className="text-sm mb-4">{card.day}</h1>
            <FontAwesomeIcon
              className="text-3xl text-orange-500"
              icon={icons[card.weather]}
            />
            <h2 className=" mt-4">{card.weather}</h2>
            <div className="flex text-2xl justify-center items-center mt-4 gap-1">
              <FontAwesomeIcon
                className="text-orange-500"
                icon={faTemperatureHalf}
              />
              <h2>{card.tempMax}°</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeeklyCard;
