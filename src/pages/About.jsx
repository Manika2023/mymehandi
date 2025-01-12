import React from "react";
import profileImage from "../assets/images/manika.png"; // Replace with your image path
import HeroSection from "../components/HeroSection";

export default function About() {
  return (
    <div>
      <HeroSection
        backgroundText="About Us"
        foregroundHeading="About"
        foregroundSpan="Us"
        breadcrumb="Home / About Us"
        backgroundImage="https://img.freepik.com/premium-vector/beautiful-mandala-background-template_1639-36370.jpg?ga=GA1.1.591662168.1683260548&semt=ais_hybrid" 
      />
      <div className="p-5 sm:p-10 bg-pink-50">
        {/* Circular Image with Transformation */}
        <div className="flex justify-center mt-10">
          <img
            src={profileImage}
            alt="Manika Mehandi Art"
            className="w-32 h-32 rounded-full border-4 border-pink-500 shadow-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 text-center mt-4">
          About Manika Mehandi Art
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
          Welcome to Manika Mehandi Art! With a passion for traditional and
          modern Mehandi designs, I strive to bring beauty and elegance to every
          event. Having honed my skills over several years, I specialize in
          creating unique patterns that reflect the personality and style of my
          clients.
        </p>
        <div className="mt-10 px-6 md:px-12 lg:px-20">
          {/* My Journey Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
            <h2 className="text-4xl font-bold text-pink-700 mb-4">
              My Journey
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              My journey in the world of Mehandi began as a hobby, which quickly
              turned into a passion. I have had the privilege of working on
              various occasions, from weddings to festivals, helping people
              celebrate their special moments with beautiful designs.
            </p>
          </div>

          {/* Services Offered Section */}
          <div className="bg-gradient-to-r from-pink-100 to-pink-50 rounded-lg shadow-lg p-8 mb-10">
            <h2 className="text-4xl font-bold text-pink-700 mb-4">
              Services Offered
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              <li>Bridal Mehandi</li>
              <li>Traditional Patterns</li>
              <li>Modern and Custom Designs</li>
              <li>Mehandi for Festivals and Events</li>
              <li>Henna Workshops</li>
            </ul>
          </div>

          {/* Testimonial Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
            <h2 className="text-4xl font-bold text-pink-700 mb-6 text-center">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-pink-50 p-6 rounded-lg shadow-md">
               
                <h3 className="text-lg font-bold text-gray-800 text-center mt-4">
                  Priya Sharma
                </h3>
                <p className="text-gray-600 text-sm text-center mt-2">
                  "The designs were absolutely stunning, and Manika made my
                  wedding day even more special. Highly recommended!"
                </p>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg shadow-md">
              
                <h3 className="text-lg font-bold text-gray-800 text-center mt-4">
                  Ayesha Khan
                </h3>
                <p className="text-gray-600 text-sm text-center mt-2">
                  "The intricate Mehandi designs exceeded my expectations. Manika
                  is truly talented and professional!"
                </p>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg shadow-md">
               
                <h3 className="text-lg font-bold text-gray-800 text-center mt-4">
                  Sunita Gupta
                </h3>
                <p className="text-gray-600 text-sm text-center mt-2">
                  "The Mehandi art was perfect for our family function. Manika
                  was friendly, punctual, and very creative!"
                </p>
              </div>
            </div>
          </div>

          {/* Get in Touch Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-4xl font-bold text-pink-700 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              If you have any questions or would like to book a session, feel
              free to{" "}
              <a
                href="/contact"
                className="text-pink-600 font-semibold hover:underline"
              >
                contact me
              </a>
              !
            </p>
            <a
              href="/contact"
              className="px-6 py-3 bg-pink-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-pink-700 transition-all"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
