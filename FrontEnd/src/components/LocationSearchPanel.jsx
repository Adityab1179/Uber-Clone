import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const LocationSearchPanel = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");

  const handleHeightToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      location,
      destination,
    };
    console.log(data);
  };
  return (
    <div
      className={`absolute bottom-2 left-0 w-full bg-white p-6 transition-all duration-500 ease-in-out z-10 ${
        isExpanded ? "h-full z-0" : "h-[40%] z-10"
      }`}
    >
      <div className="relative">
        <h3 className="text-2xl font-semibold">Find the ride</h3>
        <FontAwesomeIcon
          icon={faAngleDown}
          size="lg"
          onClick={handleHeightToggle}
          className={`absolute right-10 top-1 cursor-pointer transform transition-transform duration-300 ${
            !isExpanded ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <div className="h-[70px] bg-black w-1 absolute top-20 left-8 rounded"></div>

      <div className="flex flex-col w-full h-full">
        <form onSubmit={handleSubmit}>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-[#eee] w-full mt-3 px-5 py-2 text-base"
            type="text"
            placeholder="Enter your location"
            onClick={() => setIsExpanded(true)}
          />
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="bg-[#eee] w-full mt-4 px-5 py-3 text-base"
            type="text"
            placeholder="Enter your destination"
            onClick={() => setIsExpanded(true)}
          />
          <button
            type="submit"
            className="bg-[#f8c200] w-full mt-4 px-5 py-3 text-base font-semibold"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default LocationSearchPanel;
