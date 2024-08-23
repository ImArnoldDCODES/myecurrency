"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "I’m a very anxious person but use this and feel so relaxed and sleep way better now with the aid of sleepsiq.",
    name: "James Miller",
    title: "CEO, Techbias",
    image: "/profile_picture.svg",
  },
  {
    text: "This product has completely changed my life. I now wake up feeling refreshed and ready to tackle the day.",
    name: "Emily Johnson",
    title: "Founder, Wellbeing Inc.",
    image: "/profile_picture.svg",
  },
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); 
  }, []);


  return (
    <div className="relative md:w-[100%] lg:w-[25rem] lg:h-[23rem] max-w-md mx-auto mt-8 py-20 px-5 bg-white drop-shadow-2xl rounded-lg shadow-md bg-[#FBF9F2] z-[1]">
      <div className="text-start max-w-80">
        <p className="text-lg italic text-gray-700">{testimonials[currentIndex].text}</p>
      </div>

      <div className="flex mt-16">
        <Image
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="ml-4">
          <p className="text-base font-semibold">{testimonials[currentIndex].name}</p>
          <p className="text-sm text-gray-500">{testimonials[currentIndex].title}</p>
        </div>
      </div>

      <div className="absolute bottom-[1rem] left-0 right-0 flex justify-center">
        <button
          onClick={prevSlide}
          className="mx-1 h-[15px] w-[15px] bg-gray-200 rounded-full hover:bg-gray-300"
        >
        </button>
        <button
          onClick={nextSlide}
          className="mx-1 h-[15px] w-[15px] bg-gray-200 rounded-full hover:bg-gray-300"

        >
        </button>
      </div>
    </div>
  );
};

export default Slider;
