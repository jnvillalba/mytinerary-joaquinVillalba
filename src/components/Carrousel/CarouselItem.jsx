import React, { useState } from "react";
import { Carousel } from "react-3dm-carousel";

const CarouselItem = ({ key, content, prevSlide, nextSlide }) => {
  const [selectedCardIdx, setSelectedCardIdx] = useState(0);

  return (
    <div className="carousel-item relative w-full" id={key}>
      <Carousel cardsData={content} setSelectedCardIdx={setSelectedCardIdx} />
      <div className="flex-col justify-center items-center text-white">
        <h5 className="text-3xl font-semibold ">
          {content[selectedCardIdx].title}
        </h5>
        <p>{content[selectedCardIdx].description}</p>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#${prevSlide}`} className="btn btn-circle">
          {`#${prevSlide}`}
        </a>
        <a href={`#${nextSlide}`} className="btn btn-circle">
          {`#${nextSlide}`}
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;
