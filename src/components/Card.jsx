import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ image, title, description }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
      <img
        className="w-[400px] h-[400px] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
        src={image}
        alt="Mehndi Art"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-3 text-gray-600 text-sm">{description}</p>
        <Link
          to="/gallery"
          className="mt-5 inline-block px-4 py-2 text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition duration-300"
        >
          View More
        </Link>
      </div>
    </div>
  );
}
