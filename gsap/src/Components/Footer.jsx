import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <footer style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem', background: '#333', color: '#fff' }}>
        <div>
          <h4>Follow Us</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        <div>
          <h4>Contact Us</h4>
          <a href="mailto:someone@example.com"><FaEnvelope /> Email Us</a>
        </div>
      </footer>
    </>
  )
}

export default Footer