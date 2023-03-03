import { useState } from "react";
import { useWeather } from "../hooks/useWeather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function Searchbar() {
  const [city, setCity] = useState("Roma");
  const { onFetch } = useWeather();
  const DefaultSubmit = (e) => {
    e.preventDefault()
    onFetch(city)
  }
  return (
    <form className="flex justify-center h-10 rounded-full overflow-hidden mb-2">
      <input
        className="w-4/5 pl-5 bg-cyan-100/60 placeholder:text-[#e0f8fb]"
        placeholder="Enter location..."
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="w-1/5 bg-blue-600 flex justify-center items-center gap-4"
        onClick={DefaultSubmit}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}
