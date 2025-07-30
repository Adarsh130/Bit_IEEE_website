import React from "react";
import { CalendarDays, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Background Illustration */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-64 text-red-100"
          fill="currentColor"
          viewBox="0 0 1440 320"
        >
          <path
            fillOpacity="1"
            d="M0,160L60,165.3C120,171,240,181,360,165.3C480,149,600,107,720,101.3C840,96,960,128,1080,144C1200,160,1320,160,1380,160L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row gap-10 items-start relative z-10">
        {/* Conference News */}
        <motion.div
          className="w-full md:w-1/3 bg-white border shadow-lg rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-red-600 text-white px-5 py-4 flex items-center gap-2 text-lg font-semibold">
            <Star size={18} />
            Conference News
          </div>
          <div className="p-4 flex flex-col gap-4">
            {/* News Card 1 */}
            <div className="bg-gray-50 border rounded-lg p-4 flex justify-between items-center hover:shadow transition">
              <div className="text-sm font-medium">
                CONFERENCE DATE: 5th AND 6th DECEMBER 2025
              </div>
              <div className="flex items-center text-xs text-gray-500 gap-1">
                <CalendarDays size={14} />
                
              </div>
            </div>

            {/* News Card 2 */}
            <div className="bg-gray-50 border rounded-lg p-4 flex justify-between items-center hover:shadow transition">
              <div className="text-sm font-medium">
                LAST DATE FOR FULL PAPER SUBMISSION: 30.08.2025
              </div>
              <div className="flex items-center text-xs text-gray-500 gap-1">
                <CalendarDays size={14} />
                
              </div>
            </div>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          className="w-full md:w-2/3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-extrabold text-center mb-2 text-gray-800">ABOUT US</h2>
          <div className="flex justify-center mb-4">
            <div className="h-1 w-20 bg-red-600 rounded-full"></div>
          </div>
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-700">
            International Conference on IoT, Communication and Automation Technology
          </h3>
          <p className="text-justify text-sm text-gray-600 leading-relaxed">
          3<sup>rd</sup> ICICAT-2025 Conference will be organized by the Department of Computer Science and Engineering, Buddha Institute of Technology, Gorakhpur, India. The conference is technically co-sponsored by IEEE Uttar Pradesh Section, India. Uttar Pradesh Section is located in Region 10 and is represented at the India Council. IEEE UP Section interfaces with industries and academia through various technical and humanitarian activities. Conference Proceedings will be abstracted and indexed by IEEE Xplore.
          </p>

          <div className="flex justify-center mt-6">
            <button
              onClick={() => navigate("/about")}
              className="px-6 py-2 border-2 border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition font-medium text-sm"
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
