import { Mail, Phone, MapPin } from 'lucide-react';

const SectionHeading = ({ title }) => (
  <div className="text-center mb-8">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">{title}</h2>
    <div className="flex justify-center mt-3">
      <div className="w-28 h-1 bg-gray-300 relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-10 h-1 bg-red-600 rounded-full" />
      </div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto text-center bg-white rounded-2xl shadow-lg">
      <SectionHeading title="Contact Us" />

      <div className="space-y-4 text-gray-700">
        <p className="text-xl font-semibold">Buddha Institute of Technology</p>
        <p className="flex items-center justify-center gap-2 text-sm sm:text-base">
          <MapPin className="w-5 h-5 text-red-500" />
          CL-1, Sector 7, GIDA, Gorakhpur, Uttar Pradesh - 273209
        </p>

        <div className="space-y-2 mt-6">
          <p className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5 text-green-500" />
            <span><strong>Prof. Roop Ranjan:</strong> <a href="tel:+917618882277" className="text-blue-600 hover:underline">+91-7618882277</a></span>
          </p>
          <p className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5 text-green-500" />
            <span><strong>Mr. Ankur Kumar:</strong> <a href="tel:+919794849804" className="text-blue-600 hover:underline">+91-9794849804</a></span>
          </p>
        </div>

        <p className="flex items-center justify-center gap-2 mt-4">
          <Mail className="w-5 h-5 text-yellow-500" />
          <a href="" className="text-blue-600 hover:underline"></a>
        </p>

        <p className="text-sm text-gray-500 mt-6 italic">
          (Available on working days from 9:00 AM to 5:00 PM)
        </p>
      </div>
    </section>
  );
};

export default Contact;
