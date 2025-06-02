import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import SelectedVehicle from "./SelectedVehicle";

const VehiclePanel = (props) => {
  const { setvehiclePanel, setIsExpanded,setselectedVehicle,setVehicleImageURL,setDestination } = props;
  return (
    <div>
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
      <div className="flex w-full gap-4 items-center justify-between mt-3 border-2 border-white active:border-black px-2" onClick={()=>{
        setVehicleImageURL("https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398986/assets/90/34c200-ce29-49f1-bf35-e9d250e8217a/original/UberX.png");
        setselectedVehicle(true);
        setvehiclePanel(false);
        setIsExpanded(false);
            
        
      }}>
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
          <h3 className="text-gray-600 text-sm">Affordable, Compact rides</h3>
        </div>
        <h3 className="text-xl font-semibold">193.19Rs</h3>
      </div>

      <div className="flex w-full gap-4 items-center justify-between mt-1 border-2 border-white active:border-black px-2" onClick={()=>{
        setVehicleImageURL("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTJw6dzEo1MYXOAbONCG1oL82rxU_Bitb-g&s");
        setselectedVehicle(true);
        setvehiclePanel(false);
        setIsExpanded(false);
        
      }}>
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
          <h3 className="text-gray-600 text-sm">Affordable, Motocycle rides</h3>
        </div>
        <h3 className="text-xl font-semibold">65.97Rs</h3>
      </div>

      <div className="flex w-full gap-4 items-center justify-between mt-1 border-2 border-white active:border-black px-2" onClick={()=>{
        setVehicleImageURL("https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png");
        setselectedVehicle(true);
        setvehiclePanel(false);
        setIsExpanded(false);
        
      }}>
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
  );
};

export default VehiclePanel;
