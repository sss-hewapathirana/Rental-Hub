// src/pages/PropertyPage.jsx
import { useParams } from "react-router-dom";
import propertiesData from "../data/properties.json";
import PropertyGallery from "../components/PropertyGallery";
import PropertyTabs from "../components/PropertyTabs";

export default function PropertyPage() {
  const { id } = useParams();

  const property = propertiesData.properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Property not found.</p>
      </div>
    );
  }

  return (
    <div className="property-page max-w-6xl mx-auto p-4 md:p-8">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">{property.descriptionShort}</h1>

      {/* Gallery */}
      <PropertyGallery images={property.images} className="mb-6" />

      {/* Price & Location */}
      <div className="mb-6">
        <p className="text-2xl font-bold text-gray-900 mb-1">
          £{property.price.toLocaleString()}
        </p>
        <p className="text-gray-600 text-lg">{property.location}</p>
      </div>

      {/* Tabs (Details, Features, etc.) */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <PropertyTabs property={property} />
      </div>
    </div>
  );
}
