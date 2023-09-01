import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';

const Itinerary = ({ itinerary }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="card w-96 bg-base-100 m-5 shadow-xl">
      <figure>
        <img src={itinerary.image} alt={itinerary.name} />
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
  Price: {' '}
  {Array.from({ length: itinerary.price }, (_, index) => (
    <span key={index} className="text-yellow-500">
      <CurrencyDollarIcon className="inline-block w-4 h-4" /> {/* Ajusta el tamaño según tus necesidades */}
    </span>
  ))}
</p>
        <div className="mt-4 flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            View More
          </button>
          <div>
            {itinerary.hashtags.map((tag) => (
              <div className="badge badge-outline" key={tag}>
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
            Activities and Comments
            <ChevronDownIcon
              className={`ml-2 w-5 h-5 transition-transform ${
                isAccordionOpen ? "transform rotate-180" : ""
              }`}
            />
          </button>
          {isAccordionOpen && (
            <div className="mt-2">
              <p>Under Construction</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
