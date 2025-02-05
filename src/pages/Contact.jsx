import React from "react";
// import HeroSection from "./components/HeroSection";
import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";

const Contact = () => {
  return (
    <div>
      <HeroSection
        backgroundText="Contact Us"
        foregroundHeading="Contact"
        foregroundSpan="Us"
        breadcrumb="Home / Contact Us"
      />
      {/* Additional content for the Contact page can go here */}
      <div className="flex flex-col items-center bg-white py-12">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <p className="text-pink-500 text-sm font-medium">
          We'd Love To Hear From You
        </p>
        <h1 className="text-4xl font-bold text-black mt-2">CONTACT US</h1>
      </div>

      {/* Decorative Dots */}
      <div className="flex justify-center items-center mb-6">
        <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
      </div>

      {/* Red Lines */}
      <div className="flex justify-around w-full max-w-2xl mb-10">
        <div className="border-t-4 border-pink-500 w-16"></div>
        <div className="border-t-4 border-pink-500 w-16"></div>
        <div className="border-t-4 border-pink-500 w-16"></div>
      </div>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {/* Find Us */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Find Us Here
          </h3>
          <p className="text-sm text-gray-600">
            Park Avenue, st no 2 <br />
            near amar furniture, Manakwal, Dhandra <br />
            Road, Ludhiana, Punjab <br />
            141116
          </p>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Get in Touch
          </h3>
          <p className="text-sm text-gray-600">
            <span className="flex items-center justify-center">
              📞 +91 79861 42878
            </span>
            <span className="flex items-center justify-center">
              ✉️ support@jshomedecor.com
            </span>
          </p>
        </div>

        {/* Timing Hours */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Timing Hours
          </h3>
          <p className="text-sm text-gray-600">
            Mon-Fri: 10am - 8pm <br />
            Saturday: 10am - 4pm
          </p>
        </div>
      </div>
    </div>

{/* lower part of map */}
    <div className="px-52 py-2">
    <ContactSection
          phone="+91 9990147462"
          email="singhmanika409@gmail.com"
          address="Vijay Bridal Mehandi, Back of Safal Dairy C4E, Main Market Marg, Block C3A, Block C 4E, Janakpuri, New Delhi, Delhi, 110058"
          mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28047.318057643446!2d77.068689!3d28.615605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03422c344d5f%3A0xcd44babcaf75383e!2sBack%20of%20Safal%20Dairy%20C4E%2C%20Main%20Market%20Marg%2C%20Block%20C3A%2C%20Block%20C%204E%2C%20Janakpuri%2C%20New%20Delhi%2C%20Delhi%2C%20110058!5e0!3m2!1sen!2sin!4v1618411111111!5m2!1sen!2sin"
        />
        </div>

    </div>
  );
};

export default Contact;
