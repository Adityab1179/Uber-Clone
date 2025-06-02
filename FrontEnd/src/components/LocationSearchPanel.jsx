import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const LocationSearchPanel = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [vehiclePanel, setvehiclePanel] = useState(false);

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
    console.log(data);
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
        <div className="w-full text-center text-gray-200">
          <FontAwesomeIcon
            icon={faAngleDown}
            size="lg"
            onClick={() => {
              setvehiclePanel(false);
              setIsExpanded(false);
            }}
            className="cursor-pointer transform transition-transform duration-500"
          />
        </div>
        <h1 className="font-bold text-2xl mb-4">Choose a Vehicle</h1>
        <div className="flex w-full gap-4 items-center justify-between mt-3 border-2 border-white active:border-black px-2">
          <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398986/assets/90/34c200-ce29-49f1-bf35-e9d250e8217a/original/UberX.png"
            alt=""
          />
          <div className="w-full">
            <h3 className="text-xl font-semibold">
              UberGo &nbsp;
              <span className="text-sm">
                <FontAwesomeIcon icon={faUser} />4
              </span>
            </h3>
            <h3>2 mins away</h3>
            <h3 className="text-gray-600 text-sm">
              Affordable, Compact rides
            </h3>
          </div>
          <h3 className="text-xl font-semibold">193.19Rs</h3>
        </div>

        <div className="flex w-full gap-4 items-center justify-between mt-1 border-2 border-white active:border-black px-2">
          <img
            className="h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTJw6dzEo1MYXOAbONCG1oL82rxU_Bitb-g&s"
            alt=""
          />
          <div className="w-full">
            <h3 className="text-xl font-semibold">
              UberGo &nbsp;
              <span className="text-sm">
                <FontAwesomeIcon icon={faUser} />1
              </span>
            </h3>
            <h3>3 mins away</h3>
            <h3 className="text-gray-600 text-sm">
              Affordable, Motocycle rides
            </h3>
          </div>
          <h3 className="text-xl font-semibold">65.97Rs</h3>
        </div>

        <div className="flex w-full gap-4 items-center justify-between mt-1 border-2 border-white active:border-black px-2">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt=""
          />
          <div className="">
            <h3 className="text-xl font-semibold">
              UberGo &nbsp;
              <span className="text-sm">
                <FontAwesomeIcon icon={faUser} />3
              </span>
            </h3>
            <h3>5 mins away</h3>
            <h3 className="text-gray-600 text-sm">Affordable, Auto rides</h3>
          </div>
          <h3 className="text-xl font-semibold">103.58Rs</h3>
        </div>
      </div>
    </div>
  );
};

export default LocationSearchPanel;
