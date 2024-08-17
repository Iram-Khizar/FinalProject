import React, { useState, useEffect } from "react";

const ReservationForm = ({ reservation, onSubmit, onCancel }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [carType, setCarType] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [location, setLocation] = useState("");

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (reservation) {
      setName(reservation.name || "");
      setEmail(reservation.email || "");
      setContactNumber(reservation.contactNumber || "");
      setCarType(reservation.carType || "");
      setPickUpDate(reservation.pickUpDate || "");
      setDropOffDate(reservation.dropOffDate || "");
      setLocation(reservation.location || "");
    }
  }, [reservation]);

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!contactNumber) newErrors.contactNumber = "Contact number is required";
    if (!carType) newErrors.carType = "Car type is required";
    if (!pickUpDate) newErrors.pickUpDate = "Pick-up date is required";
    if (!dropOffDate) newErrors.dropOffDate = "Drop-off date is required";
    if (!location) newErrors.location = "Location is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      onSubmit({
        id: reservation?.id, // Include the reservation ID for updates
        name,
        email,
        contactNumber,
        carType,
        pickUpDate,
        dropOffDate,
        location,
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`border p-2 w-full ${errors.name ? "border-red-500" : ""}`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`border p-2 w-full ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div>
        <label className="block mb-1">Contact Number</label>
        <input
          type="text"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          className={`border p-2 w-full ${
            errors.contactNumber ? "border-red-500" : ""
          }`}
        />
        {errors.contactNumber && (
          <p className="text-red-500 text-sm">{errors.contactNumber}</p>
        )}
      </div>
      <div>
        <label className="block mb-1">Car Type</label>
        <input
          type="text"
          value={carType}
          onChange={(e) => setCarType(e.target.value)}
          className={`border p-2 w-full ${
            errors.carType ? "border-red-500" : ""
          }`}
        />
        {errors.carType && (
          <p className="text-red-500 text-sm">{errors.carType}</p>
        )}
      </div>
      <div>
        <label className="block mb-1">Pick-Up Date</label>
        <input
          type="date"
          value={pickUpDate}
          onChange={(e) => setPickUpDate(e.target.value)}
          className={`border p-2 w-full ${
            errors.pickUpDate ? "border-red-500" : ""
          }`}
        />
        {errors.pickUpDate && (
          <p className="text-red-500 text-sm">{errors.pickUpDate}</p>
        )}
      </div>
      <div>
        <label className="block mb-1">Drop-Off Date</label>
        <input
          type="date"
          value={dropOffDate}
          onChange={(e) => setDropOffDate(e.target.value)}
          className={`border p-2 w-full ${
            errors.dropOffDate ? "border-red-500" : ""
          }`}
        />
        {errors.dropOffDate && (
          <p className="text-red-500 text-sm">{errors.dropOffDate}</p>
        )}
      </div>
      <div>
        <label className="block mb-1">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={`border p-2 w-full ${
            errors.location ? "border-red-500" : ""
          }`}
        />
        {errors.location && (
          <p className="text-red-500 text-sm">{errors.location}</p>
        )}
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
