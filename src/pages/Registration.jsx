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

const registrationData = [
  { category: "Student (IEEE Member)", india: "4900 INR", foreign: "200 USD" },
  { category: "Student (Non-IEEE Member)", india: "5900 INR", foreign: "250 USD" },
  { category: "Faculty (IEEE Member)", india: "6900 INR", foreign: "300 USD" },
  { category: "Faculty (Non-IEEE Member)", india: "7900 INR", foreign: "350 USD" },
  { category: "Industry", india: "8900 INR", foreign: "400 USD" },
  { category: "Participant Fee", india: "1000 INR", foreign: "50 USD" },
];

const Registration = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6">
      {/* Registration Table */}
      <section>
        <SectionHeading title="REGISTRATION" />
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">CATEGORY</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Indian Delegates</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Foreign Delegates</th>
              </tr>
            </thead>
            <tbody>
              {registrationData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border px-4 py-2 text-sm sm:text-base">{item.category}</td>
                  <td className="border px-4 py-2 text-sm sm:text-base">{item.india}</td>
                  <td className="border px-4 py-2 text-sm sm:text-base">{item.foreign}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Payment Details Table */}
      <section className="mt-10">
        <SectionHeading title="PAYMENT DETAILS" />
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <tbody>
              <tr>
                <th className="border px-4 py-2 text-left text-sm sm:text-base">Account Name</th>
                <td className="border px-4 py-2 text-sm sm:text-base">Buddha Institute of Technology</td>
              </tr>
              <tr>
                <th className="border px-4 py-2 text-left text-sm sm:text-base">Account Number</th>
                <td className="border px-4 py-2 text-sm sm:text-base">320101000481</td>
              </tr>
              <tr>
                <th className="border px-4 py-2 text-left text-sm sm:text-base">Bank Name</th>
                <td className="border px-4 py-2 text-sm sm:text-base">ICICI Bank</td>
              </tr>
              <tr>
                <th className="border px-4 py-2 text-left text-sm sm:text-base">Branch</th>
                <td className="border px-4 py-2 text-sm sm:text-base">Sahjanwa</td>
              </tr>
              <tr>
                <th className="border px-4 py-2 text-left text-sm sm:text-base">IFSC Code</th>
                <td className="border px-4 py-2 text-sm sm:text-base">ICIC0003201</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Registration;
