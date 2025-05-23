import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import { Bot } from 'lucide-react';

const Header = () => {
  return (
    <header className=" hidden md:flex justify-between mb-1 items-center py-4 px-8 bg-gray-100 opacity-40 text-black shadow-lg">
      {/* Left Side: Address */}
      <div className="text-xl font-semibold">
        <p className="hover:text-gray-300 transition duration-300">
          123 Pet Street, Ludhiana, Punjab
        </p>
      </div>

      {/* Right Side: Email, Phone, and Social Icons */}
      <div className="flex items-center space-x-6">
        {/* Phone Icon */}
        <a
          href="https://pet-care-mu.vercel.app/"
          className="flex items-center text-black hover:text-gray-300 transition duration-300"
        >
          <Bot className="mr-2" />ChatBot
        </a>
        <a
          href="tel:+1234567890"
          className="flex items-center text-black hover:text-gray-300 transition duration-300"
        >
          <FaPhone className="mr-2" /> +91 9876543210
        </a>

        {/* Email */}
        <a
          href="mailto:example@example.com"
          className="flex items-center text-black hover:text-gray-300 transition duration-300"
        >
          <FaEnvelope className="mr-2" /> Email
        </a>

        {/* Social Icons */}
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
    </header>
  );
};

export default Header;
