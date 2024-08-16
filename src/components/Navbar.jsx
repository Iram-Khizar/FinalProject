import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl">
          Car Rental
        </Link>
        <div>
          <Link to="/" className="text-white-300 hover:text-white mx-2">
            Home
          </Link>
          <Link to="/cars" className="text-white-300 hover:text-white mx-2">
            Cars
          </Link>
          <Link to="/about" className="text-white-300 hover:text-white mx-2">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
