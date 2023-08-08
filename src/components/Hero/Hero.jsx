import React from "react";
import "./Hero.css";
import { Parallax, Background } from "react-parallax";

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const Hero = () => {
  return (
    <>
    
    <Parallax bgImage={"./home-bg.jpeg"} strength={500}>
    <section className="hero-container py-6 lg:px-24 min-h-screen " >
        <div className="hero-content text-white flex-col lg:flex-row-reverse transform hover:scale-105 duration-500 ease-in-out">
          <img
            src="/placeholder.png"
            className="max-w-sm w-full rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold ">Find the perfect destination</h1>
            <p className="py-10 text-wrapper">
              Our app will help you find the perfect path for your next trip.
              With an easy-to-use interface and a host of itinerary options,
              planning your next trip has never been easier.
            </p>
            <button className="btn btn-prima">View More</button>
          </div>
        
        </div>
        <div className="flex justify-center items-center py-6 ">
        <button className="btn btn-prima">Call to action</button>
      </div>
      </section>
    </Parallax>
    <Parallax bgImage={"./cities-bg.jpeg"} strength={500}>
    
     
      </Parallax>
    </>
  );
};

export default Hero;
