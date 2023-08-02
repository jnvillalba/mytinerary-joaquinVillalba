import React from "react";
import "./Hero.css";
export const Hero = () => {
  return (
    <div className="hero hero-container lg:p-24 xl:p-32 min-h-screen">
      <div className="hero-content lg:px-0 flex-col lg:flex-row-reverse">
        <img
          src="/placeholder.png"
          className="max-w-sm w-full rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Find the perfect destination</h1>
          <p className="py-6 text-wrapper">
            Our app will help you find the perfect path for your next trip. With
            an easy-to-use interface and a host of itinerary options, planning
            your next trip has never been easier.
          </p>
          <button className="btn btn-prima">View More</button>
        </div>
      </div>
    </div>
  );
};
