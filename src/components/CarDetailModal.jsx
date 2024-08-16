import React from "react";

const CarDetailModal = ({ car, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-3xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col items-center">
          <img
            src={car.image}
            alt={car.model}
            className="w-full h-auto object-contain mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">{car.model}</h3>
          <p className="text-gray-700 font-semibold text-lg mb-4">
            {car.description}
          </p>
          <p className="text-gray-900 font-semibold text-xl mb-4">
            ${car.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarDetailModal;
