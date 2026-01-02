// src/components/PropertyCard.jsx
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

export default function PropertyCard({ property, onFavourite }) {
  return (
    <div className="property-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-4">
      {/* Image */}
      <img
        src={property.images[0]}
        alt={property.descriptionShort}
        className="w-full h-48 md:h-56 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-1">
            {property.descriptionShort}
          </h3>
          <p className="text-gray-600 mb-2 text-sm md:text-base">
            {property.location}
          </p>
          <p className="text-gray-900 font-bold text-lg md:text-xl">
            £{property.price.toLocaleString()}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-4 flex justify-between items-center">
          <Link
            to={`/property/${property.id}`}
            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm md:text-base transition-colors duration-200"
          >
            View Details
          </Link>
          <button
            onClick={() => onFavourite(property)}
            className="text-black hover:text-red-600 text-xl md:text-2xl transition-colors duration-200"
            title="Add to Favourites"
          >
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
}
