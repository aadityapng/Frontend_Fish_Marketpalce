"use client";

import { Carousel } from "flowbite-react";
import React from "react";

const componentCarousel = () => {
  return (
    <div className="w-full max-w-[1920px] mx-auto mt-10">
      <div className="h-[33.85vw] max-h-[650px] px-4 sm:px-8 md:px-12 lg:px-13 xl:px-14">
        <Carousel>
          <img
            src="/guppy.jpg"
            alt="banner"
            className="w-full h-full object-cover"
          />
          <img
            src="/guppy2.jpg"
            alt="banner"
            className="w-full h-full object-cover"
          />
          <img
            src="/guppy3.jpg"
            alt="banner"
            className="w-full h-full object-cover"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default componentCarousel;
