import React from "react";

const FeatureSection2 = ({ heading, mediaType, mediaSrc1, mediaSrc2, para }) => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:gap-12 px-4">
        {/* Left Section - Media (Video/Image Placeholder) */}
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 lg:mb-0">
          <div className="w-full sm:w-1/4 lg:w-3/4 aspect-w-16 aspect-h-9 bg-black rounded-lg shadow-lg">
            {mediaType === "video" ? (
              <video
                className="w-full h-full object-cover rounded-lg"
                src={mediaSrc1}
                controls
                autoPlay
                loop
                muted
              ></video>
            ) : (
              <img
                className="w-full h-full object-cover rounded-lg"
                src={mediaSrc1}
                alt="Media 1"
              />
            )}
          </div>
          <div className="w-full sm:w-1/2 lg:w-3/4 aspect-w-16 aspect-h-9 bg-black rounded-lg shadow-lg">
            {mediaType === "video" ? (
              <video
                className="w-full h-full object-cover rounded-lg"
                src={mediaSrc2}
                controls
                autoPlay
                loop
                muted
              ></video>
            ) : (
              <img
                className="w-full h-full object-cover rounded-lg"
                src={mediaSrc2}
                alt="Media 2"
              />
            )}
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{heading}</h2>
          <p className="text-base sm:text-lg leading-relaxed">{para}</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection2;
