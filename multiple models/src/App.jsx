import React from 'react'
import CanvasContainer from './Components/CanvasContainer'

function App() {

  return (
    <>
      <div className="bg-gray-100">
        <div className='h-screen'>
          <CanvasContainer />
        </div>
        {/* Header */}
        <div className='header-section bg-black text-white p-4'>
          <h1 className="text-3xl font-bold">Header Section</h1>
          <p className="mt-2">Welcome to our website. We are glad to have you here.</p>
          <nav className="mt-4">
            <a href="#hero" className="mr-4 hover:underline">Hero</a> 
            <a href="#about" className="mr-4 hover:underline">About</a> 
            <a href="#projects" className="mr-4 hover:underline">Projects</a> 
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
        {/* hero */}
        <div className='hero-section bg-gray-800 text-white p-8' id="hero">
          <h1 className="text-4xl font-bold">Hero Section</h1>
          <p className="mt-4">Discover the amazing features we offer.</p>
          <button className="mt-6 bg-white text-black px-4 py-2 rounded">Learn More</button>
        </div>
        {/* about */}
        <div className='about-section bg-gray-700 text-white p-8' id="about">
          <h2 className="text-3xl font-bold">About</h2>
          <p className="mt-4">We are a team of passionate developers dedicated to creating the best user experiences.</p>
          <p className="mt-2">Our mission is to deliver high-quality software solutions that meet the needs of our clients.</p>
          <p className="mt-2">We specialize in web development, mobile app development, and UI/UX design.</p>
        </div>
        {/* Projects */}
        <div className='projects-section bg-gray-600 text-white p-8' id="projects">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="mt-4">Check out some of our projects!</p>
          <ul className="mt-4 list-disc list-inside">
            <li>Project 1: A web application for managing tasks. <a href="/projects/1" className="underline">View Project</a></li>
            <li>Project 2: A mobile app for tracking fitness activities. <a href="/projects/2" className="underline">View Project</a></li>
            <li>Project 3: An e-commerce platform for selling products online. <a href="/projects/3" className="underline">View Project</a></li>
          </ul>
          <p className="mt-4">We are constantly working on new projects and updating our portfolio. Stay tuned for more!</p>
        </div>
        {/* Contact */}
        <div className='contact-section bg-gray-500 text-white p-8' id="contact">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-4">Feel free to reach out to us!</p>
          <p className="mt-2">Email: <a href="mailto:contact@ourwebsite.com" className="underline">contact@ourwebsite.com</a></p>
          <p className="mt-2">Phone: <a href="tel:+1234567890" className="underline">+123 456 7890</a></p>
          <p className="mt-2">Address: 123 Main Street, Anytown, USA</p>
          <p className="mt-4">Follow us on social media:</p>
          <ul className="mt-2 list-disc list-inside">
            <li><a href="https://facebook.com" className="underline">Facebook</a></li>
            <li><a href="https://twitter.com" className="underline">Twitter</a></li>
            <li><a href="https://linkedin.com" className="underline">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      
    </>
  )
}

export default App
