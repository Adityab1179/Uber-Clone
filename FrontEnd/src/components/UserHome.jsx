import React from "react";
import { useRef, useState } from "react";



function Home() {
  const inputRef = useRef(null);
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const handleHeightChange = (e) => {
    if (inputRef.current) {
      inputRef.current.style.transition = "0.5s ease-in-out";
      inputRef.current.style.height = "100%";
      inputRef.current.style.zIndex = "0";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      location: location,
      destination: destination,
    };
  };
  return (
    <div className="relative w-screen h-screen">
      <img
        className=" w-screen cover"
        src="https://pmrajani.weebly.com/uploads/1/3/0/3/13034516/screen_orig.gif"
        alt="Royal Caribbean"
      />
      <div
        ref={inputRef}
        className="absolute bottom-2 left-0 w-full z-10 h-[40%] bg-white p-6"
      >
        <div>
          <h3 className="text-2xl font-semibold relative">Find the ride</h3>
          <i className="ri-arrow-down-wide-fill text-5xl text-black bg-yellow-200 p-2"></i>


        </div>
        
        <div className="h-[70px] bg-black w-1 absolute top-20 left-8 rounded"></div>
        <div className="flex flex-col w-full h-full">
          <form action="">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-[#eee] w-full mt-3 px-5 py-2 text-base"
              type="text"
              placeholder="Enter your location"
              onClick={handleHeightChange}
            />
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] w-full mt-4 px-5 py-3 text-base"
              type="text"
              placeholder="Enter your destination"
              onClick={handleHeightChange}
            />
            <button
              onClick={handleSubmit}
              className="bg-[#f8c200] w-full mt-4 px-5 py-3 text-base font-semibold"
            >
              Search
            </button>
          </form>
        </div>
        {/* <div className="bg-red-700 h-[0%]"> hello</div> */}
      </div>
    </div>
  );
}

export default Home;
