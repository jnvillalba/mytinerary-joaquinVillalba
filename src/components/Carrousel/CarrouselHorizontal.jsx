import React from "react";
import CarouselItem from "./CarouselItem";

const CarrouselHorizontal = ({ slides }) => {
  const slidesGrouped = [];
  for (let i = 0; i < slides.length; i += 4) {
    slidesGrouped.push(slides.slice(i, i + 4));
  }
  console.log(slidesGrouped.length)

  return (
    <div className="carousel w-full">
      {slidesGrouped.map((slideGroup, index) => (
        <CarouselItem
          key={index}
          content={slideGroup}
          prevSlide={index > 0 ? index - 1 : slidesGrouped.length - 1}
          nextSlide={slidesGrouped.length / (index + 1)  }
        />
      ))}
    </div>
  );
};

export default CarrouselHorizontal;
