import React from 'react';

const Itinerary = ({ itinerary}) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <div className="flex items-center">
        <img src={itinerary.image} alt={itinerary.name} className="w-10 h-10 rounded-full" />
        <p className="ml-2">{itinerary.name}</p>
      </div>
      <div className="mt-2 flex items-center">
        <div className="flex space-x-2">
          {Array.from({ length: itinerary.price }, (_, index) => (
            <span key={index} className="text-yellow-500">
              💰
            </span>
          ))}
        </div>
        <p className="ml-2">{itinerary.durationHours} hrs</p>
        <p className="ml-2">{itinerary.likes} likes</p>
      </div>
      <div className="mt-2">
        {itinerary.hashtags.map((tag) => (
          <span key={tag} className="bg-gray-200 px-2 py-1 text-gray-600 text-sm rounded-full mr-2">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">View More</button>
      </div>
      <div className="mt-4">
        <p>Activities and Comments (Under Construction)</p>
      </div>
    </div>
  );
};

export default Itinerary;
