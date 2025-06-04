import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMoneyBillWave,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const LookingForDriver = (props) => {
  const {
    vehicleImageURL,
    location,
    destination,
    setvehiclePanel,
    setselectedVehicle,
    setConfirmRide,
    setLookingForDriver
  } = props;
  return (
    <div className="fixed bottom-0 w-screen bg-white z-50 px-2 pt-2 pb-5 transition-all duration-800 ease-in-out transform translate-y-0 opacity-100">
      <div className="w-full text-center text-gray-200">
        <FontAwesomeIcon
          icon={faAngleDown}
          size="lg"
          onClick={() => {
            setvehiclePanel(true);
            setselectedVehicle(false);
          }}
          className="cursor-pointer transform transition-transform duration-500"
        />
      </div>
      <h1 className="text-2xl font-bold text-center w-full">
        Looking for a Driver
      </h1>
      <div className="flex flex-col gap-2 mt-4 px-5">
        {vehicleImageURL && (
          <div className="w-full flex justify-center">
            <img
              className="w-1/2"
              src={vehicleImageURL}
              alt="Selected Vehicle"
            />
          </div>
        )}
        <div className="flex items-center gap-4 border-b-1 border-gray-400 p-2 ">
          <span>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="bg-[#eee] p-2 rounded-3xl"
            />
          </span>
          <div className="w-full pr-10">
            <h1 className="font-bold text-xl">{location}</h1>
            <h3 className="text-sm text-gray-600">{location}</h3>
          </div>
        </div>
        <div className="flex items-center  gap-4 border-b-1 border-gray-400 p-2 ">
          <span>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="bg-[#eee] p-2 rounded-3xl"
            />
          </span>
          <div className="w-full pr-10">
            <h1 className="font-bold text-xl">{destination}</h1>
            <h3 className="text-sm text-gray-600">{destination}</h3>
          </div>
        </div>

        <div className="flex items-center  gap-4 border-b-1 border-gray-400 p-2">
          <span>
            <FontAwesomeIcon icon={faMoneyBillWave} />
          </span>
          <div className="w-full pr-10">
            <h1 className="font-bold text-xl"> Rs 103.94</h1>
            <p className="text-sm text-gray-600"> Cash Cash</p>
          </div>
        </div>
        <button className="bg-green-600 text-white w-full py-3 rounded-xl mt-5" onClick={()=>{
          setLookingForDriver(false)
          setConfirmRide(true)
        }}>Ride Confirmed</button>
      </div>
    </div>
  );
};

export default LookingForDriver;
