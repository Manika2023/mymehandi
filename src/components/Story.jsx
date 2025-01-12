import React from 'react';

const Story = ({ title, subtitle, description, videoSrc }) => {
  return (
    <section className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[5rem] items-center justify-center">
        {/* Text Section */}
        <div className="space-y-6 px-4 sm:px-2 lg:pl-32" data-aos="fade-up">
          <div className="animate-bounce h-0.5 w-[6rem] sm:w-[8rem] lg:w-[10rem] bg-black inline-block mb-1.5"></div>
          <span className="pl-2 text-gray-800 text-lg sm:text-xl lg:text-2xl">{subtitle}</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">{title}</h2>
          
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        {/* Video Section */}
        <div className="px-4 sm:px-8 lg:px-0">
          <video
            src={videoSrc}
            controls
            autoPlay
            loop
            muted
            className="rounded-lg shadow-lg w-full h-auto max-h-[30rem] sm:max-h-[20rem] md:max-h-[25rem] object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Story;
