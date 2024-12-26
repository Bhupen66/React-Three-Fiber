import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-800 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl mb-8">We provide the best solutions for your business</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
