import React from "react";
import Carousel from "../components/Carousel";
import mehndi1 from "../assets/images/slide1.jpg";
import mehndi2 from "../assets/images/slide2.jpg";
import mehndi3 from "../assets/images/slide3.jpg";

import cardimg1 from "../assets/images/card1.jpg";
import cardimg2 from "../assets/images/card2.jpg";
import cardimg3 from "../assets/images/card3.jpg";
import myVideo from "../assets/images/storyVideo.mp4"
import myVideo1 from "../assets/images/video1.mp4"
import myVideo2 from "../assets/images/video2.mp4"

import Card from "../components/Card";
import Story from "../components/Story";
import FeatureSection1 from "../components/FeatureSection1";
import FeatureSection2 from "../components/FeatureSection2";
import ContactSection from "../components/ContactSection";

export default function Home() {
  const images = [mehndi1, mehndi2, mehndi3];

  return (
    <div className="bg-pink-50">
      {/* Carousel Section */}
      <Carousel />

      {/* Header Section */}
      <div className="bg-pink-50 p-5 mt-10 rounded-lg shadow-md text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800">
          Manika Mehandi Art
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600">
          Discover the beauty of traditional and modern Mehandi art.
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-10 grid gap-6 sm:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <Card
          image={cardimg1}
          title="Modern Mehandi"
          description="A fusion of modern and traditional styles."
        />
        <Card
          image={cardimg2}
          title="Customized Design"
          description="Beautiful designs for special occasions."
        />
        <Card
          image={cardimg3}
          title="Traditional Patterns"
          description="Intricate designs to celebrate cultural traditions."
        />
        <Card
          image={mehndi1}
          title="Traditional Patterns"
          description="Intricate designs to celebrate cultural traditions."
        />
        <Card
          image={mehndi2}
          title="Traditional Patterns"
          description="Intricate designs to celebrate cultural traditions."
        />
        <Card
          image={mehndi3}
          title="Traditional Patterns"
          description="Intricate designs to celebrate cultural traditions."
        />
      </div>

      <div className="my-16">
        <Story
          title="Manika Mehandi Art"
          subtitle="Our Story"
          description="When your hands need an exquisite touch of art, look no further than us.
           We, MehndiArt located in New Delhi, India, offer a wide range of intricate Mehndi designs to suit your style and occasion. Whether it’s for a wedding, festival, or any special event, our beautiful Mehndi designs will enhance your look and leave a lasting impression. We also provide customized Mehndi designs based on your preferences, ensuring every client gets a unique and personal touch. With a growing client base,
           we are excited to continue spreading the art of Mehndi to more people."
          videoSrc={myVideo} // Pass the video source as a prop
        />
      </div>

      <div className="">
        <FeatureSection1
          title="Celebrate the Elegance of Mehandi"
          description="Discover the intricate art of Mehandi designs, perfect for weddings, festivals, and celebrations. From traditional patterns to modern designs, our collection will help you celebrate with beauty and style."
          imageUrl={cardimg3}
        />
      </div>

      <div className="">
        <FeatureSection2
          heading="Explore Our Beautiful Designs"
          mediaType="video" // Specifies that the content will be images
          mediaSrc1={myVideo1} // Image 1 source
          mediaSrc2={myVideo2} // Image 2 source
          para="Discover a variety of stunning designs to elevate your space. Explore our collection of artwork and make your interiors stand out."
        />
      </div>

      <div>
        <ContactSection
          phone="+91 9990147462"
          email="singhmanika409@gmail.com"
          address="Vijay Bridal Mehandi, Back of Safal Dairy C4E, Main Market Marg, Block C3A, Block C 4E, Janakpuri, New Delhi, Delhi, 110058"
          mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28047.318057643446!2d77.068689!3d28.615605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03422c344d5f%3A0xcd44babcaf75383e!2sBack%20of%20Safal%20Dairy%20C4E%2C%20Main%20Market%20Marg%2C%20Block%20C3A%2C%20Block%20C%204E%2C%20Janakpuri%2C%20New%20Delhi%2C%20Delhi%2C%20110058!5e0!3m2!1sen!2sin!4v1618411111111!5m2!1sen!2sin"
        />
      </div>
    </div>
  );
}
