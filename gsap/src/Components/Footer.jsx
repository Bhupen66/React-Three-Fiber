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
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-start px-4 md:px-12">
        {/* About Us Section */}
        <div className="w-full md:w-1/3 mb-6">
          <h4 className="text-xl font-semibold mb-4 border-b-2 border-yellow-500 inline-block">
            About Us
          </h4>
          <p className="text-gray-400 leading-relaxed">
            We are a team of passionate developers creating awesome web
            experiences. Our mission is to bring your ideas to life with
            cutting-edge technology.
          </p>
        </div>

        {/* Follow Us Section */}
        <div className="w-full md:w-1/3 mb-6">
          <h4 className="text-xl font-semibold mb-4 border-b-2 border-yellow-500 inline-block">
            Follow Us
          </h4>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110 text-gray-400 hover:text-blue-500"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110 text-gray-400 hover:text-blue-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110 text-gray-400 hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110 text-gray-400 hover:text-blue-700"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110 text-gray-400 hover:text-gray-600"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="w-full md:w-1/3 mb-6">
          <h4 className="text-xl font-semibold mb-4 border-b-2 border-yellow-500 inline-block">
            Contact Us
          </h4>
          <p className="flex items-center text-gray-400 hover:text-yellow-400 mb-2">
            <FaEnvelope className="mr-2" />
            <a href="mailto:someone@example.com" className="transition">
              Email Us
            </a>
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <FaPhone className="mr-2" />
            +123-456-7890
          </p>
          <p className="text-gray-400">
            123 Developer Lane, Code City, 12345
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 text-gray-500 py-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
