import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const volunteerMembers = [
  'Mr. Harsha Pandey',
  'Mr. Adarsh Paswan',
  'Mr. Mohd Anzal',
];

const VolunteerCommittee = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-12 bg-white" ref={ref}>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          MEMBERS OF VOLUNTEER COMMITTEE
        </h2>
        <div className="mt-2 h-1 w-20 mx-auto bg-red-600 rounded" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
        {volunteerMembers.map((name, index) => (
          <motion.div
            key={index}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
            <p className="mt-2 text-gray-600">Buddha Institute of Technology, Gorakhpur, India.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VolunteerCommittee;
