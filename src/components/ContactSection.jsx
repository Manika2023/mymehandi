import React from "react";

const ContactSection = ({ phone, email, address, mapUrl }) => {
  return (
    <section className="bg-white text-black py-12">
      <div className="container mx-auto px-4 md:flex items-start justify-between">
        {/* Left Section - Contact Information */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="mb-2">
            <div className="animate-bounce h-0.5 w-[6rem] sm:w-[8rem] lg:w-[10rem] bg-black inline-block mb-1.5"></div>
            <span className="pl-2 text-gray-800 text-lg sm:text-xl lg:text-2xl">Contact us</span>
          </div>

          <div className="mb-8 text-4xl font-extrabold">Let's Start a Project</div>
          <p className="text-lg mb-2">T: {phone}</p>
          <p className="text-lg mb-2">
            M: <a href={`mailto:${email}`} className="underline">{email}</a>
          </p>
          <p className="text-lg">{address}</p>
          <div className="mt-8">
            <div className="animate-bounce h-0.5 w-[6rem] sm:w-[8rem] lg:w-[10rem] bg-black inline-block mb-1.5"></div>
            <span className="pl-2 text-gray-800 text-lg sm:text-xl lg:text-2xl">Get Direction</span>
          </div>
        </div>

        {/* Right Section - Google Map */}
        <div className="md:w-1/2">
          <iframe
            title="Google Map"
            src={mapUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="origin"
            sandbox="allow-same-origin allow-scripts allow-popups"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
