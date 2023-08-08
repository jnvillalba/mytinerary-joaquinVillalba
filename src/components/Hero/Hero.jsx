import React, { useState } from "react";
import "./Hero.css";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { Carousel as Carousel3D } from "react-3dm-carousel";
import { MapPinIcon } from "@heroicons/react/24/solid";
const citiesData = [
  {
    id: "1",
    title: "Wakatobi",
    description: "Indonesia",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/170407220916-04-iconic-mountains-matterhorn-restricted.jpg?q=w_2512,h_1413,x_0,y_0,c_fill/w_1280",
  },
  {
    id: "2",
    title: "Neo Tokyo",
    description: "Japan",
    image: "./tokyo.jfif",
  },
  {
    id: "3",
    title: "Buenos Aires",
    description: "Argentina",
    image: "./ba.jpg",
  },
  {
    id: "4",
    title: "Nueva York",
    description: "Estados Unidos",
    image: "./ny.jpg",
  },
  {
    id: "5",
    title: "Londres",
    description: "Reino",
    image: "./bg-2.jpeg",
  },
  {
    id: "6",
    title: "Río de Janeiro",
    description: "Brasil",
    image: "./cities-bg.jpeg",
  },
  {
    id: "7",
    title: "Roma",
    description: "Italia",
    image:
      "https://images.unsplash.com/photo-1507643179773-3e975d7ac515?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHBob3RvZ3JhcGh5JTIwYXJ0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "8",
    title: "Pekin",
    description: "China",
    image:
      "https://images.unsplash.com/photo-1603924147107-81e7a2b3051e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHBob3RvZ3JhcGh5JTIwYXJ0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "9",
    title: "Estambul",
    description: "Turkey",
    image:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvZ3JhcGh5JTIwYXJ0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "10",
    title: "Ciudad de México",
    description: "Mexico",
    image:
      "https://images.unsplash.com/photo-1520052205864-92d242b3a76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJyaWdodHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "11",
    title: "Sidney",
    description: "Australia",
    image:
      "https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJyaWdodHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "12",
    title: "Moscu",
    description: "Rusia",
    image: "./bg-1.jpeg",}
];
const Hero = ({ background }) => {
  const groupSize = 4;
  const groupedCities = [];
  for (let i = 0; i < citiesData.length; i += groupSize) {
    groupedCities.push(citiesData.slice(i, i + groupSize));
  }
  return (
    <div>
      <section className="hero-container py-6 lg:px-24 min-h-screen">
        <div className="hero-content text-white lg:flex-row-reverse transform hover:scale-105 duration-500 ease-in-out">
          <img
            src="/placeholder.png"
            className="max-w-sm w-full rounded-lg shadow-2xl"
            alt="Placeholder"
          />
          <div>
            <h1 className="text-5xl font-bold mb-4 lg:mb-6">
              Find the perfect destination
            </h1>
            <p className="py-2 lg:py-4 text-wrapper">
              Our app will help you find the perfect path for your next trip.
              With an easy-to-use interface and a host of itinerary options,
              planning your next trip has never been easier.
            </p>
            <button className="btn btn-prima">View More</button>
          </div>
        </div>
        <div className="flex justify-center items-center py-4 lg:py-6">
          <Link to="/cities" className="btn btn-prima">
            Call to action
          </Link>
        </div>
      </section>
      <Parallax bgImage={background} strength={500}></Parallax>
      <Parallax bgImage={"./cities-bg.jpeg"} strength={500}>
        <Carousel>
          {groupedCities.map((group, index) => (
            <Carousel.Item key={index}>
              <Carousel3D
                cardsData={group}
                rotation={true}
                rotationDuration={60}
                tilt={false}
                freeRoam={true}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Parallax>
    </div>
  );
};

export default Hero;