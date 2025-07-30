import React, { useState } from "react";

const SectionHeading = ({ title }) => (
  <div className="text-center mb-6">
    <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
    <div className="flex justify-center mt-2">
      <div className="w-24 h-0.5 bg-gray-300 relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-8 h-0.5 bg-red-600" />
      </div>
    </div>
  </div>
);

const Gallery = () => {
  const images = [
    "/assets/images/image1.jpg",
    "/assets/images/image2.jpg",
    "/assets/images/image3.jpg",
    "/assets/images/image4.jpg",
    "/assets/images/image5.jpg",
    "/assets/images/image6.jpg",
    "/assets/images/image7.jpg",
  ];

  const [enlargedIndex, setEnlargedIndex] = useState(null);

  const handleImageClick = (index) => {
    setEnlargedIndex(index);
  };

  const closeModal = () => {
    setEnlargedIndex(null);
  };

  return (
    <div className="bg-white text-black font-sans p-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Gallery" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer flex items-center justify-center"
              onClick={() => handleImageClick(index)}
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-auto h-auto max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Enlarged Image */}
      {enlargedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={images[enlargedIndex]}
            alt="Enlarged"
            className="max-w-3xl max-h-[90vh] rounded-lg shadow-2xl cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;