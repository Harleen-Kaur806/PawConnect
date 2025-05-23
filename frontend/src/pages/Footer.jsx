import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";  // For React Router Navigation

const Footer = () => {
  return (
    <footer className="bg-orange-50 text-black py-6">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">About Us</h3>
            <p className="text-gray-800 text-sm sm:text-base">
              We offer a wide range of pet products and services, including veterinary care and pet supplies. Our mission is to provide the best care for your furry friends.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-800 hover:text-white">Home</Link></li>
              <li><Link to="/products" className="text-gray-800 hover:text-white">Shop</Link></li>
              <li><Link to="/appointments" className="text-gray-800 hover:text-white">Veterinary Services</Link></li>
              <li><Link to="/contact" className="text-gray-800 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-800 text-sm sm:text-base">Phone: +91 9876543210 </li>
              <li className="text-gray-800 text-sm sm:text-base">Email: info@pawconnect.com</li>
              <li className="text-gray-800 text-sm sm:text-base">Address: 123 Pet Street, Ludhiana, Punjab</li>
            </ul>
          </div>

          {/* Social Media */}
           <div className="space-y-4">
           <h3 className="text-lg sm:text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
                   <a
                     href="https://www.facebook.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-black hover:text-gray-300 transition duration-300"
                   >
                     <FaFacebook size={24} />
                   </a>
                   <a
                     href="https://www.instagram.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-black hover:text-gray-300 transition duration-300"
                   >
                     <FaInstagram size={24} />
                   </a>
                   <a
                     href="https://www.twitter.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-black hover:text-gray-300 transition duration-300"
                   >
                     <FaTwitter size={24} />
                   </a>
                 </div>
                 </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-400 pt-4">
          <p className="text-center text-gray-700 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Paw Connect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
