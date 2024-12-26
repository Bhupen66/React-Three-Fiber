import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {
  return (
    <Router>
      <nav className="bg-gray-800 p-4 top-0 w-full z-50">
        <ul className="flex space-x-4">
          <li><Link className="text-white hover:text-gray-400" to="/">Home</Link></li>
          <li><Link className="text-white hover:text-gray-400" to="/about">About</Link></li>
          <li><Link className="text-white hover:text-gray-400" to="/contact">Contact</Link></li>
          <li><Link className="text-white hover:text-gray-400" to="/gallery">Gallery</Link></li>
        </ul>
      </nav>
    </Router>
  );
};

export default Navbar;
