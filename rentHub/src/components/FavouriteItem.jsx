// src/components/FavouriteItem.jsx
import React from "react";
import { FaTrashAlt } from "react-icons/fa"; // Optional icon

const FavouriteItem = ({ property, onRemove }) => {
  return (
    <div className="flex justify-between items-center p-4 mb-3 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
      {/* Property Info */}
      <div className="flex flex-col">
        <h4 className="font-semibold text-gray-800 text-sm">
          {property.type} – <span className="text-green-600">£{property.price.toLocaleString()}</span>
        </h4>
        <p className="text-gray-500 text-xs">{property.location}</p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(property.id)}
        className="text-gray-400 hover:text-red-600 transition-colors duration-200 p-1 rounded-full"
        aria-label="Remove favourite"
        title="Remove from favourites"
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default FavouriteItem;
