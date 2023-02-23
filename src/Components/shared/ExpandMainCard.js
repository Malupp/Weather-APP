import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faTemperatureArrowUp,
  faTemperatureDown,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
function ExpandMainCard() {
  return (
    <div>
      <div className="md:hidden flex mb-4 flex-col">
        <h1 className="text-2xl">Percepito:</h1>
        <div className="flex text-2xl justify-center items-center mt-4 gap-1">
          <FontAwesomeIcon
            className="text-red-600"
            icon={faTemperatureArrowUp}
          />
          <h2>34°</h2>
          <FontAwesomeIcon className="text-blue-600" icon={faTemperatureDown} />
          <h2>27°</h2>
        </div>
        <div className="flex justify-center items-center mt-4 gap-1">
          <FontAwesomeIcon className="text-cyan-500" icon={faDroplet} />
          <h1 className="text-2xl">Umidità:</h1>
        </div>
        <div className="flex justify-center items-center mt-4 gap-1">
          <FontAwesomeIcon icon={faWind} />
          <h1 className="text-2xl">Vento:</h1>
        </div>
      </div>
    </div>
  );
}

export default ExpandMainCard;
