import React, { useState } from "react";
import ImageCard from "../components/imageCard"; // Updated reusable ImageCard
import myimage1 from "../assets/images/slide1.jpg";
import myimage2 from "../assets/images/slide2.jpg";
import myimage3 from "../assets/images/slide3.jpg";
import myimage4 from "../assets/images/gallery1.jpg";
import myimage5 from "../assets/images/gallery2.jpg";
import myimage6 from "../assets/images/gallery3.jpg";
import HeroSection from "../components/HeroSection";

function Brides() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = (design) => {
    setModalData(design);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData({});
  };

  const MehandiDesign = [
    {
      id: 1,
      image: myimage1,
      title: "Mehandi Design 1",
      description:
        "This is a beautiful and intricate Mehandi design, perfect for weddings and special occasions.",
    },
    {
      id: 2,
      image: myimage2,
      title: "Mehandi Design 2",
      description:
        "A classic Mehandi design featuring traditional patterns with a modern touch.",
    },
    {
      id: 3,
      image: myimage3,
      title: "Mehandi Design 3",
      description:
        "This design showcases elegant floral motifs, ideal for festive celebrations.",
    },
    {
      id: 4,
      image: myimage4,
      title: "Mehandi Design 4",
      description:
        "An intricate and detailed Mehandi design that enhances the beauty of hands and feet.",
    },
    {
      id: 5,
      image: myimage5,
      title: "Mehandi Design 5",
      description:
        "A modern Mehandi design with bold patterns and unique detailing.",
    },
    {
      id: 6,
      image: myimage6,
      title: "Mehandi Design 6",
      description:
        "This design features a fusion of Arabic and Indian Mehandi styles, perfect for any occasion.",
    },
    {
      id: 7,
      image: myimage4,
      title: "Mehandi Design 7",
      description:
        "An intricate and detailed Mehandi design that enhances the beauty of hands and feet.",
    },
    {
      id: 8,
      image: myimage2,
      title: "Mehandi Design 8",
      description:
        "An intricate and detailed Mehandi design that enhances the beauty of hands and feet.",
    },
  ];

  return (
    <div>
      <HeroSection
        backgroundText="Brides Design"
        foregroundHeading="Brides"
        foregroundSpan="Designs"
        breadcrumb="Home / Brides Design"
      />

      <div
        className={`mt-10 ${isModalOpen ? "relative z-10" : "relative z-0"}`}
      >
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Brides Design
        </h2>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {MehandiDesign.map((design) => (
            <ImageCard
              key={design.id}
              imageUrl={design.image}
              title={design.title}
              content={design.description}
              modalImage={design.image}
              onImageClick={() => openModal(design)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-lg w-full transform transition-all ease-in-out duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalData.image}
              alt={modalData.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-4 text-center">
              {modalData.title}
            </h3>
            <p className="text-gray-700 text-center">{modalData.description}</p>
            <div className="flex justify-center mt-4">
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Brides;
