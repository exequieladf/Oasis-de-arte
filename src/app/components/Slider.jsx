"use client";
import React, { useState } from "react";
import { SliderData } from "./SliderData";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";


const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const lenght = slides.length;

  const nextSlide = () => {
    setCurrent(current === lenght - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? lenght - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.lenght <= 0) {
    return null;
  }
  return (
    <div id="galeria" className="max-w-[1240px] mx-auto">
      <h1 className="p-4 text-2xl font-bold text-center">Galeria</h1>
      
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
                <div className="relative flex justify-center p-4">
<FaArrowCircleLeft
onClick={prevSlide}
                className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-cone z-[2] "
                size={50}
              />
              {index === current && (
                <Image
                  src={slide.image}
                  alt="/"
                  width={1440}
                  height={600}
                  objectFit="cover"
                />
              )}

                <FaArrowCircleRight
                onClick={nextSlide}
                className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-cone z-[2] "
                size={50}
              />
                </div>
              
            </div>
          );
        })}
      </div>
    
  );
};

export default Slider;
