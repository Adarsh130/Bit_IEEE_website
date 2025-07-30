import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t-4 border-red-600 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Address */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">
            Buddha Institute of Technology
          </h3>
          <p>CL-1, Sector 7, GIDA, Gorakhpur</p>
          <p>Uttar Pradesh - 273209</p>
          <p className="mt-3">
            Email:{" "}
            <a
              href="mailto:icicatbit24@gmail.com"
              className="text-blue-400 hover:underline"
            >
              icicatbit24@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+919794849804"
              className="text-gray-300 hover:text-white hover:underline"
            >
              +91-9794849804
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICICAT2024%2FSubmission%2FIndex"
                className="hover:text-red-500 transition"
              >
                Paper Submission - ICICAT 2025
              </a>
            </li>
            <li>
              <a
                href="https://www.ieee.org/publications/rights/plagiarism/plagiarism.html"
                className="hover:text-red-500 transition"
              >
                IEEE Plagiarism Policy
              </a>
            </li>
            <li>
              <a
                href="/assets/pdf/iceect2024-Conference-template-a4 (1).docx"
                className="hover:text-red-500 transition"
              >
                Paper Format
              </a>
            </li>
            <li>
              <a
                href="/assets/pdf/IEEE Copyright form_ICICAT2023.doc"
                className="hover:text-red-500 transition"
              >
                Copyright Form
              </a>
            </li>
            <li>
              <a
                href="/assets/pdf/camera-ready-template.doc"
                className="hover:text-red-500 transition"
              >
                Camera Ready Template
              </a>
            </li>
            <li>
              <a
                href="/assets/pdf/ICICAT_2024_Schedule.pdf"
                className="hover:text-red-500 transition"
              >
                Program Schedule
              </a>
            </li>
          </ul>
        </div>

        {/* Location Map */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">
            Locate Us
          </h3>
          <iframe
            title="BIT Location"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.1590018455036!2d83.26886607596721!3d26.73930166752039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399147380139859b%3A0x708768ccb2c065c9!2sBuddha%20Institute%20of%20Technology%20%2C%20Gorakhpur!5e0!3m2!1sen!2sin!4v1744639653615!5m2!1sen!2sin"
          ></iframe>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">
            Connect with Us
          </h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.facebook.com/bitgkp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="https://twitter.com/bitgkp525"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="https://www.instagram.com/bitgorakhpur525/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC1qKQxGDodisIMeNAgwYLuw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              <FaYoutube className="text-xl" />
            </a>
          </div>
          <p className="text-gray-400 text-xs">
            Available 9:00 AM - 5:00 PM (Mon–Fri)
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-zinc-900 text-center text-gray-400 border-t border-gray-700 py-4 text-xs">
        <p>© 2025 Buddha Institute Of Technology, Gorakhpur. All Rights Reserved.</p>
        <p className="mt-1">
          Designed & Powered by{" "}
          <a
            href="https://www.instagram.com/harshpandit_09_?igsh=MTduZTIyOWY2aXp0ZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline font-medium"
          >
            Harsha
          </a>
          ,{" "}
          <a
            href="https://www.instagram.com/_adarsh.13._?igsh=MWl5ZWxqNG5lZ3U0aw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline font-medium"
          >
            Adarsh
          </a>{" "}
          &{" "}
          <a
            href="https://www.instagram.com/_anzal_here?igsh=YmtxMjE3YzB6YXlq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline font-medium"
          >
            Anzal
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
