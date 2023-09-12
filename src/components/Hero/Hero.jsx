import React, { useState, useEffect } from "react";
import "./Hero.css";
import { Parallax } from "react-parallax";
import { Link,useNavigate  } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { Carousel as Carousel3D } from "react-3dm-carousel";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../../store/actions/citiesActions";
import AuthButton from "../Header/AuthButton";
const Hero = ({ background }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const citiesData = useSelector((store) => store.citiesReducer.cities);
  useEffect(() => {
    dispatch(citiesActions.get_cities())
      .unwrap()
      .catch((error) => {
        console.log(error);
      });
  }, []);

    
  const onTitleClickHandler = (card) => {
    console.log("clicked", card);
    navigate('/cities/city/' + card.id);
  };

  const citiesDataCarousel = () => {
    const limitedData = citiesData.slice(0, 12);
    return limitedData.map((city) => ({
      id: city._id,
      title: city.name,
      description: city.country,
      image: city.image,
    }));
  };
  
  const groupSize = 4;
  const citiesDataLength = citiesDataCarousel().length;
  const groupedCities = Array.from({ length: Math.ceil(citiesDataLength / groupSize) }, (_, index) => {
    const start = index * groupSize;
    return citiesDataCarousel().slice(start, start + groupSize);
  });
  
  const carouselItems = groupedCities.map((group, index) => (
    <Carousel.Item key={index}>
      <Carousel3D
        cardsData={group}
        rotation={true}
        rotationDuration={60}
        tilt={false}
        freeRoam={true}
        onTitleClickHandler={onTitleClickHandler}
      />
    </Carousel.Item>
  ));
  return (
    <div>
      <section className="hero-container py-6 lg:px-24 min-h-screen">
        <div className="hero-content text-white lg:flex-row-reverse transform hover:scale-105 duration-500 ease-in-out">
          <img
            src="/hero.jpg"
            className="max-w-sm w-full rounded-lg shadow-2xl"
            alt="hero"
            height={305}
          />
          <div>
            <h2 className="text-5xl font-bold mb-4 lg:mb-6">
              Find the perfect destination
            </h2>
            <p className="py-2 lg:py-4 text-wrapper">
              Our app will help you find the perfect path for your next trip.
              With an easy-to-use interface and a host of itinerary options,
              planning your next trip has never been easier.
            </p>
            <Link to="/cities" className="btn call-to-action">
            Call to action
          </Link>
          </div>
        </div>
        <div className="flex justify-center items-center pt-8 lg:pt-6">
          <AuthButton />
        </div>
      </section>

      <Parallax bgImage={"./playa-tropical.jpg"} strength={500}>
        <div className="flex justify-center items-center pt-8 lg:pt-6">
          <h2 className="text-5xl font-bold text-white">
            Popular Mytineraries
          </h2>
        </div>
       {/* <Carousel data-bs-theme="dark">{carouselItems}</Carousel> */}
      </Parallax>
    </div>
  );
};

export default Hero;
