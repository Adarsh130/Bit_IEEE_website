import React from "react";

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

const PaperSubmission = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8">
        <SectionHeading title="CALL FOR PAPERS" />
        <p className="text-justify text-gray-800 leading-relaxed text-sm sm:text-base">
          A Third International Conference on IoT, Communication and Automation Technology (ICICAT-2025) will be organized by Buddha Institute of Technology, Gorakhpur, India in Technical Collaboration With REC Sonbhadra, U.P, India from 24-25 November 2025.
        </p>
        <p className="text-justify text-gray-800 leading-relaxed text-sm sm:text-base mt-4">
          The aim of the ICICAT-2025 is to serve researchers, developers, and educators working in the area of IoT, Communication, and Automation Technologies to present as well as to exchange research ideas.
        </p>
        <p className="text-justify text-gray-800 leading-relaxed text-sm sm:text-base mt-4">
          ICICAT-2025 invites authors to submit their original and unpublished work that demonstrates current research in all areas of IoT, Communication, and Automation Technologies through Microsoft Conference Management Toolkit.
        </p>
        
        <p className="text-justify text-gray-800 leading-relaxed text-sm sm:text-base mt-4">
          All the accepted and presented papers of ICICAT-2025 will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements.
        </p>
        <div className="flex justify-center mt-6">
          <a
            href="https://cmt3.research.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-400 text-white font-semibold rounded-md">
              Submit Paper
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaperSubmission;