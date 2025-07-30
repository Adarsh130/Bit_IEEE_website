import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const advisoryMembers = [
  { name: 'Dr. Kumar Krishen', title: 'Ex-NASA Scientist' },
  { name: 'Prof. P.K. Singh', title: 'MMMUT, Gorakhpur' },
  { name: 'Prof. R. K. Chauhan', title: 'MMMUT Gorakhpur, India.' },
  { name: 'Dr. Sandeep Singh Senger', title: 'Cardiff Metropolitan University (U.K.)' },
  { name: 'Prof. Rakesh Kumar', title: 'MMMUT Gorakhpur, India.' },
  { name: 'Dr. Munesh Chandra', title: 'NIT Agartala, India.' },
  { name: 'Prof. Nilesh Goel', title: 'BIT (Dubai Campus), Dubai' },
  { name: 'Prof. Kumar Vaibhav Srivastav', title: 'IIT Kanpur, India.' },
  { name: 'Prof. B. D Gupta', title: 'IIT Kanpur, India.' },
  { name: 'Dr. Amit Kumar Singh', title: 'IIT BHU Varanasi, India' },
  { name: 'Prof. V.S Tripathi', title: 'MNNIT Allahabad, India.' },
  { name: 'Prof. Adhir Baran Chattopadhyay', title: 'BBIT, Kolkata, West Bengal.' },
  { name: 'Prof. Tanveer J. Siddiqui', title: 'University of Allahabad, India.' },
  { name: 'Prof. B K Kanaujiya', title: 'NIT Jalandhar, India.' },
  { name: 'Dr. Varun Kakar', title: 'Joint Secretary, IEEE UP Section' },
  { name: 'Prof. Ashish Khare', title: 'University of Allahabad, India.' },
  { name: 'Prof. Suneet Dwivedi', title: 'University of Allahabad, India.' },
  { name: 'Prof. Arvind Sharma', title: 'NIT Kurukshetra, India.' },
  { name: 'Dr. Dheeraj D', title: 'DSCE Bengaluru, India.' },
  { name: 'Dr. Ayushi Prakash', title: 'Professor, AKGEC' },
  { name: 'Dr. Dipti Kapoor Sarmah', title: 'University of Twente, The Netherlands' },
];

const AdvisoryCommittee = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-12 bg-white" ref={ref}>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          MEMBERS OF ADVISORY COMMITTEE
        </h2>
        <div className="mt-2 h-1 w-20 mx-auto bg-red-600 rounded" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
        {advisoryMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
            <p className="mt-2 text-gray-600">{member.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AdvisoryCommittee;
