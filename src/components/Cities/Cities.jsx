import React from "react";
import City from "./City";

const Cities = () => {
  const citiesData = [
    {
      name: "Wakatobi",
      country: "Indonesia",
      imageUrl:
        "https://media.cnn.com/api/v1/images/stellar/prod/170407220916-04-iconic-mountains-matterhorn-restricted.jpg?q=w_2512,h_1413,x_0,y_0,c_fill/w_1280",
    },
    {
      name: "Neo Tokyo",
      country: "Japan",
      imageUrl: "https://via.placeholder.com/308x200",
    },
    {
      name: "Buenos Aires",
      country: "Argentina",
      imageUrl: "https://via.placeholder.com/308x200",
    },
    {
      name: "Capilla del Monte",
      country: "Argentina",
      imageUrl: "https://via.placeholder.com/308x200",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center ">
        <img
          src="https://via.placeholder.com/308x200"
          alt="Banner"
          className=""
        />
        <div className="text-white text-4xl md:text-5xl font-bold py-4 md:py-6">
          Cities
        </div>
        <div className="text-white text-xl md:text-3xl font-semibold p-4">
          Collection of the most beautiful places and experiences
        </div>
      </div>
      <div className="bg-gray-200 w-full">
        <div className="rounded-lg flex flex-col md:flex-row justify-center p-4 md:p-10 md:mx-64 gap-4 lg:px-12 xl:px-20 gap-1">
          <input
            type="text"
            placeholder="Search your city"
            className="text-zinc-900 text-opacity-60 text-xl md:text-lg font-normal p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500 flex-grow"
          />
          <button className="bg-indigo-600 text-white text-base md:text-sm font-semibold px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">
            Search
          </button>
        </div>

        <div className="flex flex-wrap justify-center p-4 md:p-10 gap-8">
          {citiesData.map((city, index) => (
            <City key={index} city={city} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cities;
