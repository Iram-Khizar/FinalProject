import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import carImage from "../assets/car.png";

const Home = () => {
  const [isBooking, setIsBooking] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);
  const navigate = useNavigate(); // Add useNavigate hook

  const handleSearch = (details) => {
    setBookingDetails(details);
  };

  const handleReservationSubmit = (reservation) => {
    console.log("Reservation submitted:", reservation);
    setIsBooking(false);
    setBookingDetails(null);
  };

  const handleBack = () => {
    setBookingDetails(null);
  };

  const handleAboutUsClick = () => {
    navigate("/about"); // Navigate to About page
  };

  return (
    <div className="flex justify-between items-center p-10 bg-gray-900 text-white h-full">
      <div className="space-y-6">
        <h1 className="text-6xl font-bold">Bismillah Rent a Car</h1>
        <p className="text-xl">
          Your trusted partner for all your travel needs.
        </p>
        <button
          onClick={handleAboutUsClick} // Update onClick to use navigate
          className="bg-black hover:bg-white text-white hover:text-black py-2 px-6 rounded-full transition-colors"
        >
          About Us
        </button>
      </div>
      <img src={carImage} alt="Car" className="w-1/2 h-auto object-contain" />
    </div>
  );
};

export default Home;
