import React from "react";

const HeroSection = ({ 
  backgroundText, 
  foregroundHeading, 
  foregroundSpan, 
  breadcrumb, 
  backgroundImage = "" 
}) => {
  return (
    <div
      className={`min-h-[80vh] md:min-h-[100vh] flex flex-col justify-center items-center relative ${
        backgroundImage ? "bg-cover bg-center" : "bg-gray-900"
      }`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[9rem] font-semibold text-gray-400 opacity-10 tracking-wider uppercase text-center">
          {backgroundText}
        </h1>
      </div>

      {/* Foreground Text */}
      <div className="z-10 flex flex-col items-center justify-center gap-5 text-center px-4 sm:px-8 animate-slideUp">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide uppercase leading-tight">
          {foregroundHeading} <span className="text-blue-500">{foregroundSpan}</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-50 max-w-2xl">
          {breadcrumb}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
