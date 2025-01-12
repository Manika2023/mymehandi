import React, { useState } from "react";

const ImageCard = ({ imageUrl, title="", content="", modalImage, modalTitle}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
      {/* Card Content */}
      <div className="group">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-60 md:h-72 lg:h-80 object-cover" // Responsive height
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-gray-600 mt-2">{content}</p>
        </div>

        {/* Hover Circle */}
        <div
          className="absolute top-4 right-4 w-10 h-10 bg-blue-500 bg-opacity-50 rounded-full flex items-center justify-center
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          onClick={toggleModal}
        >
          <span className="text-gray-800 font-extrabold text-xl">+</span>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto"
          onClick={toggleModal}
        >
          <div
            className="bg-white p-4 sm:p-6 rounded-lg w-11/12 sm:max-w-3xl mx-auto relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <img
              src={modalImage || imageUrl}
              alt={modalTitle || title}
              className="w-full max-h-[80vh] object-contain rounded-md" // Restrict height and ensure aspect ratio
            />
            <button
              className="mt-8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 absolute top-4 right-4"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
