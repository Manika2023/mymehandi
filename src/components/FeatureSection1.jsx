import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeatureSection1 = ({ title, description, imageUrl }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 lg:px-16 bg-white space-y-6 lg:space-y-0"
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {/* Left Section */}
      <div className="text-center lg:text-left lg:pr-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-red-700">
          {title.split("").map((letter, index) => (
            <motion.span key={index} variants={child}>
              {letter}
            </motion.span>
          ))}
        </h1>
        <p className="mt-4 text-gray-600 text-sm">{description}</p>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2">
        <img
          src={imageUrl}
          alt="Decor"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
    </motion.div>
  );
};

export default FeatureSection1;
