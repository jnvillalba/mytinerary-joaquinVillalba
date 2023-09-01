import React from "react";
import { Link } from "react-router-dom";
import Itineraries from "../Itineraries/Itineraries";
const CityDetails = ({ city }) => {
  return (
    <>
      <section className="h-screen flex flex-col justify-between items-center">
        <div className="container bg-opacity-60 flex flex-col justify-center items-center">
          <div className="py-2">
            <div className="py-2 text-white text-5xl font-bold">
              {city.name}
            </div>
            <div className="text-white text-2xl font-semibold py-2 animation-flicker">
              Under construction
            </div>
          </div>
          <button className="px-5 py-2 btn btn-prima">
            <a href="#itineraries"> View Itineraries ↓ </a>
          </button>

        </div>
      </section>
      <section id="itineraries">
        <div className="w-full  px-5 py-7 bg-gray-200 justify-center items-center inline-flex">
          <div className="grow py-36 bg-white rounded-lg shadow justify-center items-center inline-flex">
            <Itineraries/>
          </div>
        </div>
      </section>
    </>
  );
};

export default CityDetails;
