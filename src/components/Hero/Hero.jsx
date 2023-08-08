import React, { useState } from "react";
import "./Hero.css";
import { Parallax, Background } from "react-parallax";
import { Link } from "react-router-dom";
import { Carousel, Row, Col, Card, CarouselItem } from "react-bootstrap";
import { Carousel as Carousel3D } from "react-3dm-carousel";

const citiesData = [
  {
    id: "12",
    title: "Beach Vacation",
    description: "Enjoy a relaxing getaway by the beach.",
    image:
      "https://plus.unsplash.com/premium_photo-1687881775352-9cac69fe3df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJpZ2h0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "1",
    title: "Beach Vacation",
    description: "Enjoy a relaxing getaway by the beach.",
    image:
      "https://plus.unsplash.com/premium_photo-1687881775352-9cac69fe3df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJpZ2h0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "2",
    title: "Mountain Hiking",
    description: "Embark on an adventurous hike in the mountains.",
    image:
      "https://images.unsplash.com/photo-1485487656106-d6aa01db3271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJyaWdodHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["Mountains", "Adventure", "Hiking"],
  },
  {
    id: "3",
    title: "City Tour",
    description: "Explore the vibrant streets of a bustling city.",
    image:
      "https://images.unsplash.com/photo-1507643179773-3e975d7ac515?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHBob3RvZ3JhcGh5JTIwYXJ0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["City", "Exploration", "Vibrant"],
  },
  {
    id: "4",
    title: "Cultural Experience",
    description: "Immerse yourself in the rich culture and traditions.",
    image:
      "https://images.unsplash.com/photo-1603924147107-81e7a2b3051e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHBob3RvZ3JhcGh5JTIwYXJ0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["Culture", "Traditions", "Immersion"],
  },
  {
    id: "5",
    title: "Wildlife Safari",
    description: "Discover exotic wildlife in their natural habitat.",
    image:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvZ3JhcGh5JTIwYXJ0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["Wildlife", "Safari", "Nature"],
  },
  {
    id: "6",
    title: "Food Adventure",
    description: "Indulge in a culinary journey of diverse flavors.",
    image:
      "https://images.unsplash.com/photo-1520052205864-92d242b3a76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJyaWdodHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["Food", "Culinary", "Flavors"],
  },
  {
    id: "7",
    title: "Food Adventure",
    description: "Indulge in a culinary journey of diverse flavors.",
    image:
      "https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJyaWdodHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["Food", "Culinary", "Flavors"],
  },
];
const Hero = () => {
  const groupSize = 4; 
  const groupedCities = [];
  for (let i = 0; i < citiesData.length; i += groupSize) {
    groupedCities.push(citiesData.slice(i, i + groupSize));
  }
  return (
    <>
      <Parallax bgImage={"./home-bg.jpeg"} strength={500}>
        <section className="hero-container py-6 lg:px-24 min-h-screen ">
          <div className="hero-content text-white flex-col lg:flex-row-reverse transform hover:scale-105 duration-500 ease-in-out">
            <img
              src="/placeholder.png"
              className="max-w-sm w-full rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold ">
                Find the perfect destination
              </h1>
              <p className="py-10 text-wrapper">
                Our app will help you find the perfect path for your next trip.
                With an easy-to-use interface and a host of itinerary options,
                planning your next trip has never been easier.
              </p>
              <button className="btn btn-prima">View More</button>
            </div>
          </div>
          <div className="flex justify-center items-center py-6 ">
            <Link to="/cities" className="btn btn-prima">
              Call to action
            </Link>
          </div>
        </section>
      </Parallax>
      <Parallax bgImage={"./cities-bg.jpeg"} strength={500}>
      <Carousel data-bs-theme="dark">
          {groupedCities.map((group, index) => (
            <Carousel.Item key={index}>
              
              <Carousel3D
        cardsData={group}
       
        rotation={true}
        rotationDuration={60}
        tilt={false}
        freeRoam={true}
        
        startingAnimation={true}
        rotateOnScroll={true}
        drag={true}
      />
            </Carousel.Item>
          ))}
        </Carousel>
      </Parallax>
    </>
  );
};

export default Hero;
