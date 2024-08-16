import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white-800 p-6 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-white-400">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-white text-xl mb-4">Contact Us</h2>
          <p className="flex items-center mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <a href="mailto:info@carrental.com" className="text-blue-400">
              iramkhizar118@gmail.com
            </a>
          </p>
          <p className="flex items-center mb-2">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            <a href="tel:+92-301-8443329" className="text-blue-400">
              +92-301-8443329
            </a>
          </p>
          <p className="flex items-center mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            Office------, Upper Mall Lahore, Pakistan
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-white text-xl mb-4">Quick Links</h2>
          <p className="mb-2">
            <a href="/" className="text-white-400 hover:text-white">
              Home
            </a>
          </p>
          <p className="mb-2">
            <a href="/cars" className="text-white-400 hover:text-white">
              Cars
            </a>
          </p>
          <p className="mb-2">
            <a href="/about" className="text-white-400 hover:text-white">
              About
            </a>
          </p>
          <p className="mb-2">
            <a href="/booking" className="text-white-400 hover:text-white">
              Booking
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-white text-xl mb-4">Follow Us</h2>
          <p className="mb-2">
            <a
              href="https://www.facebook.com"
              className="text-white-400 hover:text-white"
            >
              Facebook
            </a>
          </p>
          <p className="mb-2">
            <a
              href="https://www.twitter.com"
              className="text-white-400 hover:text-white"
            >
              Twitter
            </a>
          </p>
          <p className="mb-2">
            <a
              href="https://www.instagram.com"
              className="text-white-400 hover:text-white"
            >
              Instagram
            </a>
          </p>
          <p className="mb-2">
            <a
              href="https://www.linkedin.com"
              className="text-white-400 hover:text-white"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
      <div className="container mx-auto text-center text-white-400 mt-6">
        © 2024 Car Rental. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
