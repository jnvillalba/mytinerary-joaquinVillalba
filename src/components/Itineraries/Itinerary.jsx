import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Itinerary = ({ itinerary }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="card bg-base-100 m-5 shadow-xl sm:w-1/2 md:w-1/3 lg:w-1/4 h-[400px]"> {/* Establece una altura fija */}
      <figure>
        <img className="w-full" src={itinerary.image} alt={itinerary.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {itinerary.name}
          <div className="badge badge-secondary">
            {itinerary.durationHours === 1
              ? `${itinerary.durationHours} hr`
              : `${itinerary.durationHours} hrs`}
          </div>
        </h2>
        <p>
          Price:{" "}
          {Array.from({ length: itinerary.price }, (_, index) => (
            <span key={index} className="text-yellow-500">
              <CurrencyDollarIcon className="inline-block w-4 h-4" />{" "}
            </span>
          ))}
        </p>
        <div className="mt-4 flex justify-between">
          <div>
            {itinerary.hashtags.map((tag) => (
              <div className="badge badge-outline m-1" key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <button
            className="text-blue-500 flex items-center"
            onClick={toggleAccordion}
          >
            View More
            <ChevronDownIcon
              className={`ml-2 w-5 h-5 transition-transform ${
                isAccordionOpen ? "transform rotate-180" : ""
              }`}
            />
          </button>
          {isAccordionOpen && (
            <div className="mt-2">
              <p>Activities and Comments Under Construction</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
