import React, { useState, useEffect } from "react";
import myimage1 from "../assets/images/card1.jpg"; // Replace with the correct path
import myimage2 from "../assets/images/gallery1.jpg"; // Replace with the correct path
import myimage3 from "../assets/images/gallery2.jpg"; // Replace with the correct path
import myVideo from "../assets/images/video4.mp4"
import {NavLink} from "react-router-dom"

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      content: (
        <div className="flex flex-col md:flex-row items-center justify-center h-[100vh] p-4 md:p-8 bg-emerald-100">
          {/* Text Content */}
          <div
            className={`w-full md:pl-7 md:w-1/2 text-center md:text-left text-green-700 flex flex-col justify-center items-center md:items-start mb-4 md:mb-0 ${
              currentSlide === 0 ? "animate-slideUp" : ""
            }`}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Celebrate the Elegance of Mehandi
            </h1>
            <p className="mb-4 text-base md:text-lg px-2 md:px-0">
              Dive into the intricate art of Mehandi designs, perfect for weddings, festivals, and celebrations.
            </p>
            <NavLink
            to={'/gallery'}
             className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Discover Designs
            </NavLink>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 flex justify-end">
            {/* <img
              src={myimage1}
              alt="Intricate Mehandi Design"
              className="rounded-lg shadow-lg w-full md:w-[80%] h-auto object-cover"
            /> */}
            <video src={myVideo}
            className="rounded-lg shadow-lg w-full md:w-[80%] h-auto object-cover"
            controls
                autoPlay
                loop
                muted
            ></video>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="relative h-[100vh] bg-emerald-200">
          <img
            // src={myimage2}
            src="https://img.freepik.com/free-photo/mehndi-wedding-ornament-hands-drawn-by-henna_8353-9769.jpg?ga=GA1.1.591662168.1683260548&semt=ais_hybrid"
            alt="Traditional Mehandi Patterns"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div
              className={`text-white text-center px-4 ${
                currentSlide === 1 ? "animate-slideUp" : ""
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Traditional Art for Every Occasion
              </h2>
              <p className="text-sm md:text-lg">
                Explore the timeless beauty of traditional Mehandi patterns.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="relative h-[100vh] bg-emerald-300">
          <img
            // src={myimage3}
            src="https://img.freepik.com/premium-photo/hands-bride-is-decorated-beautifully-by-indian-mehndi-art-along-with-jewelerys-colorful
            // -bangles_75648-3747.jpg?ga=GA1.1.591662168.1683260548&semt=ais_hybrid"
            alt="Contemporary Mehandi Styles"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div
              className={`text-white text-center px-4 ${
                currentSlide === 2 ? "animate-slideUp" : ""
              }`}
            >
              <h2 className="text-3xl font-bold mb-2">Modern Mehandi Art</h2>
              <p className="text-lg">
                Discover contemporary Mehandi designs blending tradition with modernity.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-[100vh] overflow-hidden bg-gray-800"
      onMouseEnter={() => clearInterval(window.carouselInterval)}
      onMouseLeave={() =>
        (window.carouselInterval = setInterval(nextSlide, 5000))
      }
    >
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0">
            {slide.content}
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white p-3 rounded-full shadow-lg hover:bg-gray-600"
      >
        &lt;
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-600"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
