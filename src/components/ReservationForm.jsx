import React, { useState, useEffect } from "react";

const ReservationForm = ({ reservation, onSubmit, onCancel }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [carType, setCarType] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (reservation) {
      setName(reservation.name);
      setEmail(reservation.email);
      setContactNumber(reservation.contactNumber);
      setCarType(reservation.carType);
      setPickUpDate(reservation.pickUpDate);
      setDropOffDate(reservation.dropOffDate);
      setLocation(reservation.location);
    }
  }, [reservation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      email,
      contactNumber,
      carType,
      pickUpDate,
      dropOffDate,
      location,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Contact Number</label>
        <input
          type="text"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Car Type</label>
        <input
          type="text"
          value={carType}
          onChange={(e) => setCarType(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Pick-Up Date</label>
        <input
          type="date"
          value={pickUpDate}
          onChange={(e) => setPickUpDate(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Drop-Off Date</label>
        <input
          type="date"
          value={dropOffDate}
          onChange={(e) => setDropOffDate(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        {reservation ? "Update Reservation" : "Submit Reservation"}
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="bg-gray-500 text-white py-2 px-4 rounded ml-2"
      >
        Cancel
      </button>
    </form>
  );
};

export default ReservationForm;
