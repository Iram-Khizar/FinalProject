import React, { useState, useEffect } from "react";
import axios from "axios";

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/reservations")
      .then((response) => {
        if (response.data) {
          setReservations(response.data);
        } else {
          setError("No reservations data found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching reservations:", error);
        setError("Failed to fetch reservations.");
      });
  }, []);

  const handleEdit = (reservationId) => {
    // Handle edit functionality
    alert(`Edit reservation with id: ${reservationId}`);
    // You might want to open a form or redirect to an edit page
  };

  const handleCancel = (reservationId) => {
    axios
      .delete(`http://localhost:5000/reservations/${reservationId}`)
      .then(() => {
        setReservations(
          reservations.filter((reservation) => reservation.id !== reservationId)
        );
      })
      .catch((error) => console.error("Error canceling reservation:", error));
  };

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Your Reservations</h2>
      {reservations.length === 0 ? (
        <p className="text-center">No reservations found.</p>
      ) : (
        <ul className="space-y-4">
          {reservations.map((reservation) => (
            <li key={reservation.id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">{reservation.carType}</h3>
                  <p>
                    Pick-Up: {reservation.pickUpDate} | Drop-Off:{" "}
                    {reservation.dropOffDate}
                  </p>
                  <p>Location: {reservation.location}</p>
                  <p>Contact: {reservation.contact}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(reservation.id)}
                    className="bg-yellow-500 text-white py-1 px-3 rounded-full hover:bg-yellow-600 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleCancel(reservation.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded-full hover:bg-red-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReservationList;
