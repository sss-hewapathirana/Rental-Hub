// src/components/PropertyCard.jsx
import { Link } from "react-router-dom";
import { Heart, MapPin, Home } from "lucide-react";
import { useDrag } from "react-dnd";

export default function PropertyCard({ property, onFavourite }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "PROPERTY",
    item: { property },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
      <div
          ref={drag}
          className={`bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
              isDragging ? "opacity-50" : "opacity-100"
          }`}
      >
        {/* Image */}
        <div className="relative overflow-hidden group">
          <img
              src={property.images[0]}
              alt={property.descriptionShort}
              className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          <div className="absolute top-3 right-3">
            <button
                onClick={() => onFavourite(property)}
                className="p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors duration-200 group"
                title="Add to Favourites"
            >
              <Heart className="w-5 h-5 text-gray-700 group-hover:text-red-500 group-hover:fill-red-500 transition-all duration-200" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Property Type */}
          <div className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded mb-3">
            <Home className="w-3 h-3" />
            {property.type}
          </div>

          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 line-clamp-2">
            {property.descriptionShort}
          </h3>

          <div className="flex items-center gap-1 text-gray-600 mb-3">
            <MapPin className="w-4 h-4 text-blue-600" />
            <p className="text-sm md:text-base">{property.location}</p>
          </div>

          {/* Details */}
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            {property.added && (
                <span>
                  <strong>{property.bedrooms}</strong> beds – <em>{property.added.day}/{property.added.month}/{property.added.year}</em>
                </span>
            )}

            {property.bathrooms && (
                <span>
              <strong>{property.bathrooms}</strong> baths
            </span>
            )}
          </div>

          {/* Price */}
          <p className="text-2xl font-bold text-gray-900 mb-4">
            £{property.price.toLocaleString()}
          </p>

          {/* Action */}
          <Link
              to={`/property/${property.id}`}
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
  );
}
