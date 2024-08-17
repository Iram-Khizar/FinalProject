import React, { useState } from "react";

const BookRideForm = ({ onSearch, onClose }) => {
  const [formData, setFormData] = useState({
    pickUpDate: "",
    dropOffDate: "",
    location: "",
    address: "",
    name: "",
    contact: "",
    carType: "",
  });

  const [errors, setErrors] = useState({});

  const carOptions = [
    "Suzuki Alto",
    "Suzuki Cultus",
    "Suzuki Wagon R",
    "Toyota Corolla",
    "Toyota Yaris",
    "Toyota Hilux",
    "Honda Civic",
    "Honda City",
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.pickUpDate) newErrors.pickUpDate = "Pick-up date is required";
    if (!formData.dropOffDate)
      newErrors.dropOffDate = "Drop-off date is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.contact) newErrors.contact = "Contact is required";
    if (!formData.carType) newErrors.carType = "Car type is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      onSearch(formData);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">
        Book a Ride
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label
            htmlFor="pickUpDate"
            className="mb-1 font-semibold text-gray-700"
          >
            Pick-Up Date
          </label>
          <input
            type="date"
            id="pickUpDate"
            name="pickUpDate"
            value={formData.pickUpDate}
            onChange={handleChange}
            className={`border border-gray-300 p-2 rounded ${
              errors.pickUpDate ? "border-red-500" : ""
            }`}
          />
          {errors.pickUpDate && (
            <p className="text-red-500">{errors.pickUpDate}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="dropOffDate"
            className="mb-1 font-semibold text-gray-700"
          >
            Drop-Off Date
          </label>
          <input
            type="date"
            id="dropOffDate"
            name="dropOffDate"
            value={formData.dropOffDate}
            onChange={handleChange}
            className={`border border-gray-300 p-2 rounded ${
              errors.dropOffDate ? "border-red-500" : ""
            }`}
          />
          {errors.dropOffDate && (
            <p className="text-red-500">{errors.dropOffDate}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="location"
            className="mb-1 font-semibold text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={`border border-gray-300 p-2 rounded ${
              errors.location ? "border-red-500" : ""
            }`}
          />
          {errors.location && <p className="text-red-500">{errors.location}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="mb-1 font-semibold text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`border border-gray-300 p-2 rounded ${
              errors.address ? "border-red-500" : ""
            }`}
          />
          {errors.address && <p className="text-red-500">{errors.address}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`border border-gray-300 p-2 rounded ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="contact" className="mb-1 font-semibold text-gray-700">
            Contact
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className={`border border-gray-300 p-2 rounded ${
              errors.contact ? "border-red-500" : ""
            }`}
          />
          {errors.contact && <p className="text-red-500">{errors.contact}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="carType" className="mb-1 font-semibold text-gray-700">
            Car Type
          </label>
          <select
            id="carType"
            name="carType"
            value={formData.carType}
            onChange={handleChange}
            className={`border border-gray-300 p-2 rounded ${
              errors.carType ? "border-red-500" : ""
            }`}
          >
            <option value="" disabled>
              Select car type
            </option>
            {carOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.carType && <p className="text-red-500">{errors.carType}</p>}
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition-colors"
          >
            Reserve
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white py-2 px-6 rounded-full hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookRideForm;
