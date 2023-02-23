import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faDroplet,
  faSun,
  faTemperatureArrowUp,
  faTemperatureDown,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ExpandMainCard from "./ExpandMainCard";

export function MainCard() {
  const [expand, setExpand] = useState(false);

  const MainCardExpand = () => {
    setExpand(!expand);
  };
  return (
    <div className="border-card min-h-fit w-80 md:w-10/12 shadow-lg flex justify-center md:justify-evenly items-center mt-2">
      {/* Left side */}
      <div className="mb-4 text-center flex flex-col">
        <h1 className="text-3xl mt-4">Nome città</h1>
        <div className="flex  items-center gap-2 mt-4">
          <FontAwesomeIcon
            className="hidden md:flex text-8xl text-orange-500"
            icon={faSun}
          />
          <h1 className="text-8xl">34°C</h1>
        </div>
        <h1 className="text-xl mt-4">Nuvoloso</h1>
        {/* Read more */}
        <div className="flex flex-col mt-4 md:hidden">
          <p className={expand? "hidden" : "visible"}>
            <i>Mostra di più</i>
          </p>
          <button
            className={expand ? "rotate-180" : "rotate-0"}
            onClick={MainCardExpand}
          >
            <FontAwesomeIcon className="text-4xl md-hidden" icon={faCaretDown} />
          </button>
        </div>
        {expand && <ExpandMainCard />}
      </div>
      {/* Right side */}
      <div>
        <div className="hidden md:flex mb-4 flex-col">
          <h1 className="text-2xl">Percepito:</h1>
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
    </div>
  );
}

export default MainCard;
