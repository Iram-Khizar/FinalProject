import React from "react";

const CarCard = ({ car, onView, onEdit, onDelete, isReserved }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-72 h-auto flex flex-col items-center justify-between p-4">
      <img
        src={car.image}
        alt={car.model}
        className="w-full h-auto object-contain mb-4"
      />
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">{car.model}</h3>
        <p className="text-gray-900 font-semibold text-lg mb-4">${car.price}</p>
        <div className="flex justify-between space-x-2">
          <button
            onClick={() => onView(car)}
            className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            View
          </button>
          {isReserved && (
            <>
              <button
                onClick={() => onEdit(car)}
                className="bg-yellow-500 text-white py-1 px-3 rounded-full hover:bg-yellow-600 transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(car.id)}
                className="bg-red-500 text-white py-1 px-3 rounded-full hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarCard;
