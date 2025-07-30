import React from "react";
import LazyLoad from "react-lazyload";
import { motion } from "framer-motion";

const committeeMembers = [
  { name: "Dr. Shree Prakash Tiwari", affiliation: "IIT-Jodhpur, Rajasthan, India." },
  { name: "Dr.E.Muthu Kumaran", affiliation: "Dr. B R Ambedkar Institute of Technology, Port Blair, India." },
  { name: "Dr. Ambrish Maurya", affiliation: "NIT, Patna, India." },
  { name: "Dr. Sheo K. Mishra", affiliation: "Indira Gandhi National Tribal University, Madhya Pradesh India." },
  { name: "Dr. Mahendra Tiwari", affiliation: "University of Allahabad, India." },
  { name: "Dr. Rajiv Singh", affiliation: "Banasthali Vidyapith University, Rajasthan, India." },
  { name: "Dr. Kamakshi Kumari", affiliation: "NSUT, New Delhi." },
  { name: "Dr. Anurag Mishra", affiliation: "ISDC University of Allahabad, India." },
  { name: "Dr. Shivesh Tripathi", affiliation: "Galgotias University, Greater Noida, India." },
  { name: "Dr. Shashwat Pathak", affiliation: "CEO, Atal Incubation Center AIC GNITS Foundation Hyderabad, India." },
  { name: "Dr. Akhilesh Pandey", affiliation: "College of Engineering, Pandharpur Solapur, Maharashtra. India" },
  { name: "Dr. Vimal Mishra", affiliation: "Jaypee Institute of Information Technology (JIIT), Greater Noida India." },
  { name: "Dr. Anshu Kumar Dwivedi", affiliation: "S.R. University Warangal, India." },
  { name: "Dr. Vimal Kumar", affiliation: "Galgotia University Noida, India." },
  { name: "Dr. Rajendra Kumar Dwivedi", affiliation: "MMMTU Gorakhpur, India." },
  { name: "Dr. Amrendra Singh Yadav", affiliation: "ABV-IIITM, Gwalior, India." },
  { name: "Dr. Amit Kumar Singh", affiliation: "IIT BHU Varanasi, India." },
  { name: "Dr. Mangal Deep Gupta", affiliation: "Babasaheb Bhimrao Ambedkar Central University, Lucknow, India" }
];

const TechnicalCommittee = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-20">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 text-gray-800">
        MEMBERS OF TECHNICAL PROGRAM COMMITTEE
      </h2>
      <div className="h-1 w-20 bg-red-600 mx-auto mb-10 rounded-full"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {committeeMembers.map((member, index) => (
          <LazyLoad key={index} height={100} offset={100} once>
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
              className="bg-white shadow-md rounded-md p-6 transition hover:shadow-lg"
            >
              <p className="text-lg font-semibold text-gray-800">{member.name}</p>
              <p className="text-gray-600 mt-1">{member.affiliation}</p>
            </motion.div>
          </LazyLoad>
        ))}
      </div>
    </div>
  );
};

export default TechnicalCommittee;
