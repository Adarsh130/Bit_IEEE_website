import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const topics = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    subtopics: [
      'Artificial Intelligence',
      'LLM (Large Language Models)',
      'Federated Learning',
      'Machine Learning',
      'Deep Learning',
      'Cognitive Computing',
      'Computer Vision and Image Processing Applications',
    ],
  },
  {
    title: 'Cybersecurity & Privacy',
    subtopics: [
      'Network Security',
      'Cryptography',
      'Information Assurance',
      'Threat Intelligence',
      'Cyber Law and Ethics',
    ],
  },
  {
    title: 'Networking & Communication',
    subtopics: [
      '5G/6G Technologies',
      'Ad Hoc and Sensor Networks',
      'Software Defined Networking',
      'Mobile and Wireless Networks',
    ],
  },
  {
    title: 'Data & Computing',
    subtopics: [
      'Cloud Computing',
      'Big Data Analytics',
      'Edge and Fog Computing',
      'Quantum Computing',
    ],
  },
  {
    title: 'Electronics & Hardware',
    subtopics: [
      'VLSI Design',
      'Embedded Systems',
      'Microelectronics',
      'Electronic Devices and Circuits',
    ],
  },
  {
    title: 'Blockchain & Cryptography',
    subtopics: [
      'Smart Contracts',
      'Decentralized Applications',
      'Public Key Infrastructure',
    ],
  },
  {
    title: 'Energy & Sustainability',
    subtopics: [
      'Green Computing',
      'Smart Grids',
      'Renewable Energy Systems',
    ],
  },
  {
    title: 'Specialized Applications',
    subtopics: [
      'Healthcare Informatics',
      'Agricultural Technology',
      'Autonomous Systems',
      'E-Governance',
    ],
  },
];

const ConferenceTopics = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-10 leading-tight">
        Conference Topics <span className="text-orange-600">& Key Highlights</span>
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Conference Topics */}
        <div className="bg-white border rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-red-600 mb-6">Conference Topics</h3>
          <div className="space-y-4">
            {topics.map((item, index) => (
              <div
                key={index}
                className={`rounded-md border transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl ${
                  openIndex === index ? 'bg-white border-blue-500' : 'bg-gray-50 shadow-sm'
                }`}
              >
                <div
                  className={`flex justify-between items-center p-4 cursor-pointer font-medium text-base sm:text-lg transition-colors duration-300 ${
                    openIndex === index ? 'border-l-4 border-blue-500 bg-white' : ''
                  } hover:bg-blue-50 hover:text-blue-600`}
                  onClick={() => toggle(index)}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-red-600 text-lg sm:text-xl">🎯</span>
                    <span>{item.title}</span>
                  </div>
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {openIndex === index && (
                  <ul className="pl-10 pb-4 pr-4 list-disc text-gray-700 space-y-1 text-sm sm:text-base">
                    {item.subtopics.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Highlights + Location */}
        <div className="bg-white border rounded-xl shadow-lg p-7">
          <h3 className="text-2xl font-semibold text-black mb-4">Key Highlights</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-4 text-sm sm:text-base">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 text-lg">✔</span>
              <span>
                <strong>Focus Areas:</strong> Advanced computing, information security, AI, and emerging trends in communication technologies.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 text-lg">✔</span>
              <span>
                <strong>Global Participation:</strong> International researchers, practitioners, and experts sharing cutting-edge research.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 text-lg">✔</span>
              <span>
                <strong>Expert Sessions:</strong> Keynote addresses and technical talks from industry leaders and academic pioneers.
              </span>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-6">Conference Location</h3>
          <iframe
            title="Buddha Institute of Technology Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.1590018455036!2d83.26886607596721!3d26.73930166752039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399147380139859b%3A0x708768ccb2c065c9!2sBuddha%20Institute%20of%20Technology%20%2C%20Gorakhpur!5e0!3m2!1sen!2sin!4v1744639653615!5m2!1sen!2sin"
            width="100%"
            height="375"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md border"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ConferenceTopics;
