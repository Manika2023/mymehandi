import React,{useState} from 'react';
import mehndi1 from '../assets/images/gallery1.jpg'; // Replace with your image paths
import mehndi2 from '../assets/images/gallery2.jpg';
import mehndi3 from '../assets/images/gallery3.jpg';
import mehndi4 from '../assets/images/gallery4.jpg';
import mehndi5 from '../assets/images/gallery5.jpg';
import mehndi6 from '../assets/images/gallery6.jpg';
import ImageCard from '../components/imageCard';
import HeroSection from '../components/HeroSection';

const images = [mehndi1, mehndi2, mehndi3, mehndi4, mehndi5, mehndi6];
 const MehandiDesign = [
    {
        id: 1,
        image: mehndi1,
   
    },
    {
        id: 2,
        image: mehndi2,

    },
    {
        id: 3,
        image:mehndi3,
      
    },
    {
        id: 4,
        image: mehndi4,
      
    },
    {
        id: 5,
        image: mehndi5,
     
    },
    {
        id: 6,
        image:mehndi6,
       
    },
];

export default function Gallery() {
      // State to manage modal visibility and image details
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [modalData, setModalData] = useState({});
    
      // Function to handle image click and open modal
      const openModal = (design) => {
        setModalData(design);
        setIsModalOpen(true);
      };
    
      // Function to close the modal
      const closeModal = () => {
        setIsModalOpen(false);
        setModalData({});
      };
    
    return (
        <div className="">
             <HeroSection
        backgroundText="Gallery"
        foregroundHeading="Gallery"
        foregroundSpan=""
        breadcrumb="Home / Gallery"
        backgroundImage="https://img.freepik.com/premium-vector/beautiful-mandala-background-template_1639-36370.jpg?ga=GA1.1.591662168.1683260548&semt=ais_hybrid" 
      />
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

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

{isModalOpen && (
    <div
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    onClick={closeModal}
    >
          <div
            className="bg-white p-6 rounded-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
            >
            <img
              src={modalData.image}
              alt={modalData.title}
              className="w-full h-64 object-cover mb-4"
              />
            <h3 className="text-xl font-semibold mb-4">{modalData.title}</h3>
            <p className="text-gray-700">{modalData.description}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={closeModal}
              >
              Close
            </button>
          </div>
        </div>
      )}

      </div>
      </div>

    );
}
