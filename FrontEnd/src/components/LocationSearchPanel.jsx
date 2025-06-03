import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import VehiclePanel from "./VehiclePanel";
import SelectedVehicle from "./SelectedVehicle";

const LocationSearchPanel = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [vehiclePanel, setvehiclePanel] = useState(false);
  const [selectedVehicle, setselectedVehicle] = useState(false);
  const [vehicleImageURL, setVehicleImageURL] = useState("");

  const locationData = [
    {
      name: "Bansal Bhawan",
      address: "Bansal Street, Old Madho Nagar, Saharanpur, Uttar Pradesh",
    },
    {
      name: "Bansal Enterprises, Bansal Dairy",
      address: "Old Madho Nagar Saharanpur",
    },
    {
      name: "Meerut Institute of Engineering & Technology",
      address: "Baghpat Bypass, near Subharti University, Meerut",
    },
    {
      name: "Bansal Bhawan",
      address: "Old Madho Nagar Saharanpur",
    },
  ];

  const handleHeightToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      location,
      destination,
    };
  };

  return (
    <div
      className={`absolute bottom-0 left-0 w-full bg-white pt-4 transition-all duration-500 ease-in-out z-10 ${
        isExpanded ? "h-full z-0" : "h-[40%] z-10"
      }`}
    >
      <div className="relative px-4">
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

      <div className="h-[70px] bg-black w-1 absolute top-20 left-6 rounded"></div>

      <div className="flex flex-col w-full h-[30%] px-4">
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
            onClick={() => {
              setIsExpanded(false);
              setvehiclePanel(true);
              
            }}
          >
            Search
          </button>
        </form>
      </div>

      {isExpanded &&
        locationData.map((item, index) => (
          <div className="flex gap-4 items-center mt-3" key={index}>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="bg-[#eee] p-2 rounded-3xl"
            />
            <div
              onClick={() => {
                setvehiclePanel(true);
                setIsExpanded(false);
                setDestination(item);
              }}
              className="w-full"
            >
              <h1 className="text-xl font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-[300px]">
                {item.name}
              </h1>
              <p className="text-[#414040] font-medium">{item.address}</p>
            </div>
          </div>
        ))}

      <div className="h-[65%]"></div>

      <div
        className={`fixed bottom-0 w-full bg-white z-50 px-2 py-4 transition-all duration-800 ease-in-out transform ${
          vehiclePanel
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <VehiclePanel
          setIsExpanded={setIsExpanded}
          setvehiclePanel={setvehiclePanel}
          setselectedVehicle={setselectedVehicle}
          setVehicleImageURL={setVehicleImageURL}
          setDestination={setDestination}
        />
      </div>
      <div
        className={`fixed bottom-0 w-full transition-all duration-700 ease-in-out transform ${
          selectedVehicle
            ? "translate-y-0 opacity-100 z-50"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <SelectedVehicle
          vehicleImageURL={vehicleImageURL}
          location={location}
          destination={destination}
        />
      </div>
    </div>
  );
};

export default LocationSearchPanel;
