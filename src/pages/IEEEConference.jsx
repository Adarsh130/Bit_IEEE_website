import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bg1 from '/src/assets/Slide1.png';
import bg2 from '/src/assets/Slide2.png';
import bg3 from '/src/assets/Slide3.png';
import bg4 from '/src/assets/Slide4.png';
import bg5 from '/src/assets/Slide3.png';

const slides = [bg1, bg2, bg3, bg4, bg5];

const IEEEConferenceSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full px-2 py-4 md:py-6 bg-gray-100">
      <div className="relative w-full aspect-[2.3/1] max-h-[90vh] overflow-hidden rounded-xl shadow-xl border border-gray-300 bg-white mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide]})` }}
          />
        </AnimatePresence>

        {/* Prev/Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 md:p-3 rounded-full hover:bg-black/70 transition z-20"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 md:p-3 rounded-full hover:bg-black/70 transition z-20"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`w-2.5 h-2.5 rounded-full transition ${
                idx === currentSlide ? 'bg-white' : 'bg-gray-400'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IEEEConferenceSlider;
