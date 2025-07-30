import React from "react";

const CommitteeCard = ({ name, title, designation }) => (
  <div className="border rounded-lg shadow-md p-4 bg-white mb-4">
    <h4 className="text-lg font-semibold">{name}</h4>
    <p className="text-sm italic">{title}</p>
    {designation && <p className="text-sm">{designation}</p>}
  </div>
);

const Section = ({ title, members }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-center underline underline-offset-4 decoration-red-500 mb-4">
      {title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {members.map((member, index) => (
        <CommitteeCard key={index} {...member} />
      ))}
    </div>
  </section>
);

const patrons = () => {
  const data = {
    "Chief Patrons(s)": [
      { name: "Shri R. K. Dwivedi", title: "Chairman, Buddha Institute of Technology, Gorakhpur, India" },
      { name: "Dr. Sujay Dwivedi", title: "Secretary, Buddha Institute of Technology, Gorakhpur, India" },
      { name: "Prof. (Dr.) Shivesh Shankar", title: "Director, Buddha Institute of Technology, Gorakhpur, India" },
      { name: "Mr. Raj Kumar", title: "Director (Admin), Buddha Institute of Technology, Gorakhpur, India" }
    ],
    "Patrons(s)": [
      { name: "Prof. Piyush Singh Chauhan", title: "Principal" },
      { name: "Prof. Sanjay Kumar", title: "Head, Department of CSE, Buddha Institute of Technology, Gorakhpur, India" },
      { name: "Prof. Ashok Kumar Dwivedi", title: "Head, Department of ECE, Buddha Institute of Technology, Gorakhpur, India" }
    ]
    // ...rest if needed
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {Object.entries(data).map(([title, members]) => (
        <Section key={title} title={title} members={members} />
      ))}
    </div>
  );
};

export default patrons;
