import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faTemperatureArrowUp,
  faTemperatureDown,
} from "@fortawesome/free-solid-svg-icons";

function WeeklyCard() {
  return (
    <div>
      {/* single card component */}
      <div className="border-card h-40 w-40 shadow-lg flex flex-col justify-center items-center hover:scale-125 bg-[#e0f8fb]">
        <div className="text-center">
          <h1 className="text-sm mb-4">Lun</h1>
          <FontAwesomeIcon className="text-3xl text-orange-500" icon={faSun} />
          <h2 className=" mt-4">Chiaro</h2>
          <div className="flex text-2xl justify-center items-center mt-4 gap-1">
            <FontAwesomeIcon
              className="text-red-600"
              icon={faTemperatureArrowUp}
            />
            <h2>34°</h2>
            <FontAwesomeIcon
              className="text-blue-600"
              icon={faTemperatureDown}
            />
            <h2>27°</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeeklyCard;
