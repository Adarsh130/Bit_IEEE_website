import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Section Heading
const SectionHeading = ({ title, centered = true, small = false, red = false, boxed = false, linkTo = "" }) => {
  const headingClasses = `
    ${small ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"}
    font-extrabold tracking-wide
    ${red ? "text-red-600" : ""}
    ${boxed ? `
      inline-block px-6 py-2 
      bg-gradient-to-r from-red-600 to-pink-600 
      text-white font-bold rounded-full 
      shadow-lg transform transition-all duration-300 ease-in-out 
      hover:from-blue-600 hover:to-indigo-600 
      hover:scale-105 hover:shadow-2xl 
      ring-2 ring-transparent hover:ring-white
    ` : ""}
  `;

  const content = <h2 className={headingClasses}>{title}</h2>;

  return (
    <div className={`${centered ? "text-center" : ""} mb-6 text-black`}>
      {linkTo ? <Link to={linkTo}>{content}</Link> : content}
      {!small && (
        <div className="flex justify-center mt-2">
          <div className="w-28 h-1 bg-gray-200 relative rounded-full">
            <div className="absolute left-1/2 -translate-x-1/2 w-10 h-1 bg-red-600 rounded-full shadow-md" />
          </div>
        </div>
      )}
    </div>
  );
};

// Image sources
const glimpses = {
  "2023": [
    { src: "/assets/images/image1.jpg" },
    { src: "/assets/images/image2.jpg" },
    { src: "/assets/images/image3.jpg" },
  ],
  "2024": [
    { src: "/assets/images/image4.jpg" },
    { src: "/assets/images/image5.jpg" },
    { src: "/assets/images/image6.jpg" },
  ],
};

// Image Slider Component
const ImageSlider = ({ year, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (!images || images.length === 0) return <p className="text-center">No images available for {year}.</p>;

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black min-h-[300px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[500px]">
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img.src}
          alt={`Event ${year} - Slide ${index + 1}`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1.05 : 1,
            filter: index === currentIndex ? "blur(0px)" : "blur(2px)",
          }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-red-600 hover:text-white transition z-30"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-red-600 hover:text-white transition z-30"
      >
        ❯
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-red-500 scale-110 shadow" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Main Section
const GlimpsesSection = () => (
  <section className="px-4 md:px-10 py-16 bg-gradient-to-br from-gray-50 to-white">
    <SectionHeading title="Glimpses of the Event" red />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
      <div>
        <SectionHeading title="2023" boxed small linkTo="/glimpses/Glimpses2024" />
        <ImageSlider year="2023" images={glimpses["2023"]} />
      </div>
      <div>
        <SectionHeading title="2024" boxed small linkTo="/glimpses/Glimpses2025" />
        <ImageSlider year="2024" images={glimpses["2024"]} />
      </div>
    </div>
  </section>
);

export default GlimpsesSection;
