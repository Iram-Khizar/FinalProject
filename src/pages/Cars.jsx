import React, { useState, useEffect } from "react";
import axios from "axios";
import CarCard from "../components/CarCard";
import BookRideForm from "../components/BookRideForm";
import ReservationList from "../components/ReservationList";
import ReservationForm from "../components/ReservationForm";
import CarDetailModal from "../components/CarDetailModal";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [reservationMessage, setReservationMessage] = useState("");
  const [reservations, setReservations] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cars")
      .then((response) => setCars(response.data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/reservations")
      .then((response) => setReservations(response.data))
      .catch((error) => console.error("Error fetching reservations:", error));
  }, []);

  const handleSearch = (details) => {
    setBookingDetails(details);
  };

  const handleReservationSubmit = (reservation) => {
    axios
      .post("http://localhost:5000/reservations", reservation)
      .then((response) => {
        setReservations([...reservations, response.data]);
        setReservationMessage("Car reserved successfully!");
        setTimeout(() => {
          setReservationMessage("");
          setIsBooking(false);
          setBookingDetails(null);
        }, 2000);
      })
      .catch((error) => console.error("Error reserving car:", error));
  };

  const handleBack = () => {
    setBookingDetails(null);
  };

  const handleViewCar = (car) => {
    setSelectedCar(car);
  };

  const handleCloseCarDetail = () => {
    setSelectedCar(null);
  };

  const renderCarSets = () => {
    const carSets = [];
    for (let i = 0; i < cars.length; i += 3) {
      carSets.push(
        <div key={i} className="flex justify-center mb-10 space-x-8">
          <CarCard
            car={cars[i]}
            isReserved={cars[i].isReserved}
            onView={handleViewCar}
          />
          {cars[i + 1] && (
            <CarCard
              car={cars[i + 1]}
              isReserved={cars[i + 1].isReserved}
              onView={handleViewCar}
            />
          )}
          {cars[i + 2] && (
            <CarCard
              car={cars[i + 2]}
              isReserved={cars[i + 2].isReserved}
              onView={handleViewCar}
            />
          )}
        </div>
      );
    }
    return carSets;
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen relative">
      <h1 className="text-4xl font-bold mb-8 text-center">Car Management</h1>
      <div className="text-center mb-6">
        <button
          onClick={() => setIsBooking(true)}
          className="bg-black text-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition-colors"
        >
          Book a Ride
        </button>
      </div>
      <div className="mb-8">{renderCarSets()}</div>
      <ReservationList reservations={reservations} />
      {reservationMessage && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-75">
          <p className="text-white text-xl">{reservationMessage}</p>
        </div>
      )}
      {isBooking && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-75">
          {bookingDetails ? (
            <ReservationForm
              bookingDetails={bookingDetails}
              onSubmit={handleReservationSubmit}
              onBack={handleBack}
            />
          ) : (
            <BookRideForm
              onSearch={handleSearch}
              onClose={() => setIsBooking(false)}
            />
          )}
        </div>
      )}
      {selectedCar && (
        <CarDetailModal car={selectedCar} onClose={handleCloseCarDetail} />
      )}
    </div>
  );
};

export default Cars;
