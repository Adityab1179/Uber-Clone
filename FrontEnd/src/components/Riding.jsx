import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faLocationDot,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Riding = () => {
  return (
    <div>
      <div>
        <img
          className="w-screen object-cover h-1/2"
          src="https://pmrajani.weebly.com/uploads/1/3/0/3/13034516/screen_orig.gif"
          alt="Royal Caribbean"
        />
      </div>
      <div className="fixed bottom-0 w-screen bg-white z-50 px-2 pt-2 pb-5 transition-all duration-800 ease-in-out transform translate-y-0 opacity-100">
        <div className="flex justify-between p-2">
          <div className="w-2/5">
            <img
              className="w-full"
              src="https://avgmotors.co.in/wp-content/uploads/2022/03/SOLID-WHITE.png"
              alt=""
            />
          </div>
          <div className="w-2/5">
            <h1 className="font-semibold">Aditya Bansal</h1>
            <h1 className="text-xl font-bold">UP11CE7927</h1>
            <h1 className="text-gray-700">Maruti Wagon-R</h1>
            <h1 className="text-gray-700">
              4.3{" "}
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
            </h1>
          </div>
        </div>
        <div>
          <div className="flex items-center  gap-4 border-b-1 border-gray-300 p-2 ">
            <span>
              <FontAwesomeIcon
                icon={faLocationDot}
                className="bg-[#eee] p-2 rounded-3xl"
              />
            </span>
            <div className="w-full pr-10">
              <h1 className="font-bold text-xl">Terrace Bistro</h1>
              <h3 className="text-sm text-gray-600">Court Road,Saharanpur</h3>
            </div>
          </div>
          <div className="flex items-center  gap-4 border-b-1 border-gray-400 p-2">
            <span>
              <FontAwesomeIcon icon={faMoneyBillWave} className="bg-[#eee] p-2 rounded-3xl" />
            </span>
            <div className="w-full pr-10">
              <h1 className="font-bold text-xl"> Rs 103.94</h1>
              <p className="text-sm text-gray-600"> Cash Cash</p>
            </div>
          </div>
          <button className="bg-green-600 text-white w-full py-3 rounded-xl mt-5">
            Make a Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Riding;
