

// Gig/src/components/Footer.jsx

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamically set the current year

  return (
    <footer className="bg-black text-white py-8 w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Social Links */}
        <div className="flex mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Copyright Notice */}
        <div>
          © {currentYear} Gig Ahooy. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
