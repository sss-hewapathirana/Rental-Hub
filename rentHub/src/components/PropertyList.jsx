// src/components/PropertyList.jsx
import PropertyCard from "./PropertyCard";

export default function PropertyList({ properties, onFavourite }) {
  if (properties.length === 0) {
    return <p>No properties found.</p>;
  }

  return (
    <div className="property-grid">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          onFavourite={onFavourite}
        />
      ))}
    </div>
  );
}
