import React from "react";

const NoItineraries = () => {
  return (
    <div className=" p-5 flex-col justify-center items-center gap-8 inline-flex">
      <img className="w-64 h-48" src="/no-itineraries.svg" />
      <div className="text-zinc-900 text-3xl font-semibold p-2">
        There are no itineraries
      </div>
    </div>
  );
};

export default NoItineraries;
