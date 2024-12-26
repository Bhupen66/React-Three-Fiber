import React from 'react';

const Aboutus = () => {
  return (
    <div className="about min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
        <p className="text-gray-700 mb-4">
          Welcome to our company! We are dedicated to providing the best service possible. Our team is made up of experienced professionals who are passionate about what they do.
        </p>
        <p className="text-gray-700 mb-4">
          Our mission is to deliver high-quality products that meet the needs of our customers. We believe in innovation, integrity, and excellence in everything we do.
        </p>
        <p className="text-gray-700">
          Thank you for choosing us. We look forward to working with you and helping you achieve your goals.
        </p>
      </div>
    </div>
  );
}

export default Aboutus;
