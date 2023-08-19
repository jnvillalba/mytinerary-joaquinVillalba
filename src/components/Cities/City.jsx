import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const City = ({ index, city }) => {
  const cardStyle = {
    backgroundImage: `url(${city.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "200px",
    width: "200px",
  };

  return (
    <Link to={`city/${city._id}`}>
      <div
        key={index}
        className="rounded-2xl bg-gray-700 shadow-lg shadow-slate-600 p-4"
        style={cardStyle}
      >
        <div className="flex flex-col items-start justify-center rounded-t-2xl">
          <h2 className="font-bold text-white">{city.name}</h2>
          <div className="flex items-center text-white">
            <MapPinIcon className="h-4 w-4 flex-none" />
            <p className="">{city.country}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default City;
