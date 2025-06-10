import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,faLocationDot,faMoneyBillWave
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const WaitingForDriver = (props) => {
  const {
    vehicleImageURL,
    location,
    destination,
    setvehiclePanel,
    setselectedVehicle,
    setConfirmRide,
  } = props;
  return (
    <div className="fixed bottom-0 w-screen bg-white z-50 px-2 pt-2 pb-5 transition-all duration-800 ease-in-out transform translate-y-0 opacity-100">
      <div className="flex items-center justify-between px-2">
        {" "}
        <h1 className="text-2xl font-bold w-full">
          Meet at pickup point
        </h1>
        <div className="bg-black text-white px-4 py-2 text-center">
          <p>2</p>
          <p>Min</p>
        </div>
      </div>
      <div className="flex justify-between p-2">
        <div className="w-2/5">
          <img className="w-full" src="https://avgmotors.co.in/wp-content/uploads/2022/03/SOLID-WHITE.png" alt="" />
        </div>
        <div className="w-2/5">
          <h1 className="font-semibold">Aditya Bansal</h1>
          <h1 className="text-xl font-bold">UP11CE7927</h1>
          <h1 className="text-gray-700">Maruti Wagon-R</h1>
          <h1 className="text-gray-700">4.3 <span><FontAwesomeIcon icon={faStar} /></span></h1>
        </div>
      </div>
      <div>
         <div className="flex items-center gap-4 border-b-1 border-gray-300 p-2 ">
                  <span>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="bg-[#eee] p-2 rounded-3xl"
                    />
                  </span>
                  <div className="w-full pr-10">
                    <h1 className="font-semibold text-xl">{location}</h1>
                    <h3 className="text-sm text-gray-600">{location}</h3>
                  </div>
                </div>
                <div className="flex items-center  gap-4 border-b-1 border-gray-300 p-2 ">
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
        
                <div className="flex items-center  gap-4 border-b-1 border-gray-300 p-2">
                  <span>
                    <FontAwesomeIcon icon={faMoneyBillWave} />
                  </span>
                  <div className="w-full pr-10">
                    <h1 className="font-bold text-xl"> Rs 103.94</h1>
                    <p className="text-sm text-gray-600"> Cash Cash</p>
                  </div>
                </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
