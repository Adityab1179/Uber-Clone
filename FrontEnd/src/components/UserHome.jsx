import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import LocationSearchPanel from "./LocationSearchPanel";

function Home() {
  return (
    <div className="relative w-screen h-screen">
      <div>
      <img
        className="w-screen object-cover h-1/2"
        src="https://pmrajani.weebly.com/uploads/1/3/0/3/13034516/screen_orig.gif"
        alt="Royal Caribbean"
      />
      </div>
      <LocationSearchPanel />
    </div>
  );
}

export default Home;
