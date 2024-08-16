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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData); // Trigger the onSearch callback with the form data
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
            className="border border-gray-300 p-2 rounded"
            required
          />
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
            className="border border-gray-300 p-2 rounded"
            required
          />
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
            className="border border-gray-300 p-2 rounded"
            required
          />
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
            className="border border-gray-300 p-2 rounded"
            required
          />
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
            className="border border-gray-300 p-2 rounded"
            required
          />
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
            className="border border-gray-300 p-2 rounded"
            required
          />
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
            className="border border-gray-300 p-2 rounded"
            required
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
