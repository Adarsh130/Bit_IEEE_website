import React from "react";
import gorakhnathTemple from "/src/assets/gorakhnath-temple.jpg";
import maghar from "/src/assets/Maghar.jpg";
import geetapress from "/src/assets/geetapress.jpg";
import kushinagar from "/src/assets/kushinagar.jpg";
import Lumbini from "/src/assets/Lumbini.jpg";
import ayodhya from "/src/assets/ayodhya.jpg";

// Reusable Section Heading with underline
const SectionHeading = ({ title }) => (
  <div className="text-center mb-6 text-red-600">
    <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
    <div className="flex justify-center mt-2">
      <div className="w-24 h-0.5 bg-gray-300 relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-8 h-0.5 bg-red-600" />
      </div>
    </div>
  </div>
);

const attractions = [
  {
    title: "Gorakhnath Temple",
    image: gorakhnathTemple,
    description:
      "A famous temple dedicated to Guru Gorakhnath, a revered saint and yogi. It's a major spiritual and cultural landmark in Gorakhpur.",
    routeEmbed:
      "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d28501.8794626486!2d83.30126021841042!3d26.75283353346128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x399147380139859b%3A0x708768ccb2c065c9!2sBuddha%20Institute%20of%20Technology!3m2!1d26.7392969!2d83.271441!4m5!1s0x3991444836d27df1%3A0xead8b53359c04679!2sGorakhnath%20Temple%20Pond!3m2!1d26.7733425!2d83.3585796!5e0!3m2!1sen!2sin!4v1744638189766!5m2!1sen!2sin",
  },
  {
    title: "Geeta Press",
    image: geetapress,
    description:
      "One of the largest publishers of Hindu religious texts in India, known for disseminating the teachings of Bhagavad Gita and other sacred books.",
    routeEmbed:
      "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d28505.127445932336!2d83.29165171838949!3d26.739878438326482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x399147380139859b%3A0x708768ccb2c065c9!2sBuddha%20Institute%20of%20Technology%20%2C%20Gorakhpur%2C%20Jhungia%2C%20Uttar%20Pradesh!3m2!1d26.7392969!2d83.271441!4m5!1s0x399144127cf55449%3A0xf1f0a95af0bb5be9!2sGita%20Press%2C%20Gorakhpur%2C%20Bade%20Kajipur%2C%20Gorakhpur%2C%20Uttar%20Pradesh%20273005!3m2!1d26.7474323!2d83.3540093!5e0!3m2!1sen!2sin!4v1744642920599!5m2!1sen!2sin",
  },
  {
    title: "Kushinagar",
    image: kushinagar,
    description:
      "A significant Buddhist pilgrimage site where Lord Buddha attained Mahaparinirvana. It is home to many stupas and temples.",
    routeEmbed:
      "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d228079.42736158203!2d83.40844694780627!3d26.720718337072345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x399147380139859b%3A0x708768ccb2c065c9!2sBuddha%20Institute%20of%20Technology!3m2!1d26.7392969!2d83.271441!4m5!1s0x3993eb9e01eae47b%3A0x7a8909ed5f568540!2sKushinagar!3m2!1d26.7398787!2d83.8869698!5e0!3m2!1sen!2sin!4v1744637873125!5m2!1sen!2sin",
  },
  {
    title: "Ayodhya",
    image: ayodhya,
    description:
      "The birthplace of Lord Rama, an important city in Hindu mythology. It features temples and ghats along the Sarayu river.",
    routeEmbed:
      "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d455883.070754424!2d82.40607810124807!3d26.789448067946008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x399147380139859b%3A0x708768ccb2c065c9!2sBuddha%20Institute%20of%20Technology%20%2C%20Gorakhpur%2C%20Jhungia%2C%20Uttar%20Pradesh!3m2!1d26.7392969!2d83.271441!4m5!1s0x399a07937e6d2823%3A0x5fc8f683b17f222b!2sAyodhya%2C%20Uttar%20Pradesh!3m2!1d26.792160499999998!2d82.1997954!5e0!3m2!1sen!2sin!4v1744740169612!5m2!1sen!2sin",
  },
  {
    title: "Lumbini Nepal",
    image: Lumbini,
    description:
      "The birthplace of Lord Buddha, located in Nepal. It is a UNESCO World Heritage site with monastic zones and historical monuments.",
    routeEmbed:
      "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d454646.5962007441!2d82.70976180130918!3d27.095612318527717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x399147380139859b%3A0x708768ccb2c065c9!2sBuddha%20Institute%20of%20Technology%20%2C%20Gorakhpur%2C%20Jhungia%2C%20Uttar%20Pradesh!3m2!1d26.7392969!2d83.271441!4m5!1s0x3996eb334fe91fc1%3A0x5793b8b9b8917fcd!2sLumbini%2C%20Nepal!3m2!1d27.45!2d83.25!5e0!3m2!1sen!2sin!4v1744740310880!5m2!1sen!2sin",
  },
  {
    title: "Maghar",
    image: maghar,
    description:
      "The place where Sant Kabir Das chose to attain salvation. It is a symbol of unity, as it hosts both a temple and a mosque at his resting place.",
    routeEmbed:
      "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d57004.769376802906!2d83.1583809533833!3d26.7508187423066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x399147380139859b%3A0x708768ccb2c065c9!2sBuddha%20Institute%20of%20Technology!3m2!1d26.7392969!2d83.271441!4m5!1s0x39913ba43f96d6a7%3A0xebc9600b45206864!2sMaghar!3m2!1d26.7557109!2d83.1277242!5e0!3m2!1sen!2sin!4v1744637796316!5m2!1sen!2sin",
  },
];

export default function TouristAttractions() {
  return (
    <section className="py-16 bg-white" id="attractions">
      <div className="container mx-auto px-4">
      <SectionHeading title="Tourist Attraction" />
        {/* Parent Container for All Locations */}
        <div className="p-8 md:p-30 bg-white rounded-lg shadow-lg max-w-full">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
            {attractions.map((spot, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg transition duration-300 bg-white"
              >
                {/* Image and Route Map Container */}
                <div className="relative w-full h-72 group">
                  {/* Image */}
                  <img
                    src={spot.image}
                    alt={spot.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Route Map Overlay */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <iframe
                      src={spot.routeEmbed}
                      title={`Route to ${spot.title}`}
                      className="w-full h-full rounded-lg"
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>

                {/* Location Name */}
                <div className="p-6 text-left py-4 font-bold text-lg text-red-600">
                  {spot.title}
                </div>

                {/* Description */}
                <div className="p-6 text-gray-700 text-sm">
                  {spot.description}
                </div>

                {/* Visit Location Button */}
                <div className="text-center pb-6">
                  <button
                    onClick={() => window.open(spot.routeEmbed, "_blank")}
                    className="px-20 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    View On Map
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}