import React from "react";

const HeroSection = ({ 
  backgroundText, 
  foregroundHeading, 
  foregroundSpan, 
  breadcrumb, 
  backgroundImage="" 
}) => {
  return (
    <div
      className={`min-h-[100vh] flex flex-col justify-center items-center relative ${
        backgroundImage ? "bg-cover bg-center" : "bg-gray-900"
      }`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-[8rem] md:text-[9rem] font-semibold text-gray-400 opacity-10 tracking-wider uppercase">
          {backgroundText}
        </h1>
      </div>

      {/* Foreground Text */}
      <div className="z-10 flex flex-col items-center justify-between gap-5 animate-slideUp">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide uppercase">
          {foregroundHeading} <span className="text-blue-500">{foregroundSpan}</span>
        </h1>
        <p className="mt-4 text-gray-50">{breadcrumb}</p>
      </div>
    </div>
  );
};

export default HeroSection;
