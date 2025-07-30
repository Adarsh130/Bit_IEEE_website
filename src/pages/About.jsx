import React from "react";
import ieeeLogo from "../assets/IEEE-logo.jpg"; // Adjust the path as necessary

// Reusable Section Heading with underline
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

const About = () => {
  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Outer Box */}
      <div className="border border-gray-300 rounded-lg p-4 sm:p-6 bg-white shadow-md">
        {/* ABOUT THE CONFERENCE */}
        <section className="mb-10">
          <SectionHeading title="ABOUT THE CONFERENCE" />
          <p className="mb-4 text-sm sm:text-base">
          3<sup>rd</sup> ICICAT-2025 Conference will be organized by Department of Computer Science and Engineering, Buddha Institute of Technology, Gorakhpur, India. The conference is technically Co-sponsored by IEEE Uttar Pradesh Section, India. IEEE UP Section is located in Region 10 and is represented at the India Council. IEEE UP Section interfaces with industries and academia through various technical and humanitarian activities. Conference Proceedings will be abstracted and indexed by IEEE Xplore.
          </p>
          <p className="mb-4 text-sm sm:text-base">
            The conference will provide an opportunity to the practicing engineers, academicians, and researchers to meet in a forum to discuss various issues and its future direction of various Emerging Technologies of allied areas of Industry applications with the following outcome:
          </p>
          <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
            <li>To strengthen the industry-Academia bond and enhance collaborative and meaningful research on issues of current relevance.</li>
            <li>Expose the participating delegates to the emerging technologies through presentations.</li>
            <li>To organize expert’s talk by domain experts of global eminence.</li>
            <li>To recognize the eminent global achievers for their remarkable achievement and contributions in their respective domains by Sharda awards of excellence.</li>
          </ul>
        </section>

        {/* PUBLISHING & INDEXING */}
        <section className="mb-10">
          <SectionHeading title="PUBLISHING & INDEXING" />
          <p className="mb-5 text-sm sm:text-base">
            Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-md bg-gray-50">
            <div className="flex justify-center items-center">
              <img src={ieeeLogo} alt="IEEE Logo" className="w-32 sm:w-40 h-auto" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">IMPORTANT DATES:</h3>
              {/* Inner Box */}
              <div className="border border-gray-300 rounded-lg p-4 bg-gray-100">
                <ul className="list-disc list-inside text-sm sm:text-base">
                  <li>
                    Paper Submission Deadline: <strong>30<sup>th</sup> August, 2025</strong>
                    
                  </li>
                  <li>
                    Notification of Acceptance: <strong>15<sup>th</sup> September, 2025</strong>
                  </li>
                  <li>
                    Registration/Camera Ready Deadline:<strong> 15<sup>th</sup> October, 2025
                    </strong>
                  </li>
                  <li>
                    Conference Dates: <strong>5<sup>th</sup> - 6<sup>th</sup> December, 2025</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT BIT */}
        <section className="mb-10">
          <h2 title="text" className="text-2xl sm:text-3xl font-bold text-center mb-4">
          ABOUT BUDDHA INSTITUTE OF TECHNOLOGY, GORAKHPUR, INDIA
          </h2>
          <p className="mb-4 text-sm sm:text-base">
            Buddha Institute of Technology is approved by A.I.C.T.E. and affiliated to A.K.T.U. The programs of the institute are recognized all over India and abroad. It boasts of a strong Academic- Industrial interaction with high quality of research and consultancy and has close collaborative links with industries in the field of Automobile, Aerospace, Defence, Textile, Machine Tools, Software Development, Civil industry, Manufacturing Sector etc.
          </p>
          <p className="mb-4 text-sm sm:text-base">
            The academic building is a highly modern huge building with 5 floors hosting various labs, workshop, lecture theaters, tutorial rooms, offices etc... The main focus of the society is "knowledge based society needs youth for its innovations and also give a lead to the world." Therefore, it was felt that an academic, technical and professional institute of global standards needs to be established at Gorakhpur.
          </p>
          <p className="mb-4 text-sm sm:text-base">
            BIT has established advanced ROBOTICS LAB accredited by AICRA & 3D Printing Lab which can meet the requirement of students who are willing to create innovative products.
          </p>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Salient Features :</h3>
          <ul className="list-disc list-inside text-sm sm:text-base">
            <li>
              Outstanding Intellectual Pool: Highly Qualified, Experienced And Dedicated Faculty Members Including M. Techs, PhDs, Professors & IITians. One Of The Best In The Eastern UP.
            </li>
            <li>
              Pedagogy: Excellent Teaching Methodology With Emphasis On Interactive Learning Using Audio-Visual Aids.
            </li>
            <li>
              Personality & Communication Skills Development: Dedicated Programmes To Improve English Communication And Enhanced Personality Included In The Regular Curriculum. Well Equipped Language Lab With Audio-Visual Gadgets.
            </li>
            <li>
              Training & Placement: Highly Effective Training & Placement Cell. Qualified And Dedicated Trainers To Increase The Competitive And Employable Skills Of The Students. Excellent Corporate Relations That Help Our Students Secure Jobs. Highest Number Of Placements Are From BIT Among The Institutes In The Eastern UP.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
