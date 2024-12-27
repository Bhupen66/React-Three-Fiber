import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12">
        {/* About Us Section */}
        <div className="text-center md:text-left">
          <h4 className="text-2xl font-semibold mb-4 border-b-2 border-yellow-500 inline-block">
            About Us
          </h4>
          <p className="text-gray-400 leading-relaxed">
            We are a team of passionate developers creating stunning web
            experiences. Our mission is to bring your ideas to life with
            cutting-edge technology.
          </p>
        </div>

        {/* Follow Us Section */}
        <div className="text-center">
          <h4 className="text-2xl font-semibold mb-4 border-b-2 border-yellow-500 inline-block">
            Follow Us
          </h4>
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-125 hover:text-blue-500 text-gray-400"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-125 hover:text-blue-400 text-gray-400"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-125 hover:text-pink-500 text-gray-400"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-125 hover:text-blue-700 text-gray-400"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-125 hover:text-gray-600 text-gray-400"
            >
              <FaGithub size={28} />
            </a>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="text-center md:text-right">
          <h4 className="text-2xl font-semibold mb-4 border-b-2 border-yellow-500 inline-block">
            Contact Us
          </h4>
          <p className="flex items-center justify-center md:justify-end text-gray-400 hover:text-yellow-400 mb-2 transition">
            <FaEnvelope className="mr-2" />
            <a href="mailto:chauhanbhupen66@gmail.com">Email Us</a>
          </p>
          <p className="flex items-center justify-center md:justify-end text-gray-400 mb-2 hover:text-yellow-400 transition">
            <FaPhone className="mr-2" />
            +91 8320836870
          </p>
          <a
            href="https://maps.app.goo.gl/gWrM3FRGDpgFLASN9"
            className="text-gray-400 hover:text-yellow-400 transition block md:inline"
          >
            123 Developer Lane, Code City, 12345
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 text-gray-500 py-4 mt-8 text-center border-t border-gray-700">
        <p className="text-sm hover:text-yellow-400 transition">
          © {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
