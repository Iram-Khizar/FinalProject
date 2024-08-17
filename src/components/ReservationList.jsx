import React, { useState, useEffect } from "react";
import axios from "axios";
import ReservationForm from "./ReservationForm";

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);
  const [editingReservation, setEditingReservation] = useState(null);

  useEffect(() => {
    fetchReservations();
  }, []);

  // Fetch reservations from the server
  const fetchReservations = async () => {
    try {
      const response = await axios.get("http://localhost:5000/reservations");
      setReservations(response.data);
    } catch (error) {
      console.error("Error fetching reservations:", error);
      setError("Failed to fetch reservations.");
    }
  };

  // Handle edit button click
  const handleEdit = (reservation) => {
    setEditingReservation(reservation);
  };

  // Handle cancel edit action
  const handleCancelEdit = () => {
    setEditingReservation(null);
  };

  // Handle reservation update
  const handleUpdate = async (updatedReservation) => {
    try {
      // Optimistically update the reservation list
      setReservations((prevReservations) =>
        prevReservations.map((reservation) =>
          reservation.id === updatedReservation.id
            ? { ...reservation, ...updatedReservation }
            : reservation
        )
      );

      // Send the update request to the server
      await axios.put(
        `http://localhost:5000/reservations/${updatedReservation.id}`,
        updatedReservation
      );

      // Fetch the updated reservations to ensure data consistency
      fetchReservations();

      // Clear the editing state
      setEditingReservation(null);
    } catch (error) {
      console.error("Error updating reservation:", error);
      // Re-fetch reservations to revert the optimistic update
      fetchReservations();
    }
  };

  // Handle reservation cancellation
  const handleCancel = async (reservationId) => {
    try {
      await axios.delete(`http://localhost:5000/reservations/${reservationId}`);
      setReservations((prevReservations) =>
        prevReservations.filter(
          (reservation) => reservation.id !== reservationId
        )
      );
    } catch (error) {
      console.error("Error canceling reservation:", error);
    }
  };

  // Display error message if any
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Your Reservations</h2>
      {editingReservation ? (
        <ReservationForm
          reservation={editingReservation}
          onSubmit={handleUpdate}
          onCancel={handleCancelEdit}
        />
      ) : reservations.length === 0 ? (
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
                  <p>Contact: {reservation.contactNumber}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(reservation)}
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
