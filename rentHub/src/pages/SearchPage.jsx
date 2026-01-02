// src/pages/SearchPage.jsx
import { useState, useMemo } from "react";
import propertiesData from "../data/properties.json";
import PropertyList from "../components/PropertyList";
import SearchForm from "../components/SearchForm";
import FavouriteList from "../components/FavouriteList";
import { filterProperties } from "../utils/filterProperties";

export default function SearchPage() {
  // Search criteria state
  const [criteria, setCriteria] = useState({
    type: "Any",
    minPrice: null,
    maxPrice: null,
    minBedrooms: null,
    maxBedrooms: null,
    postcodeArea: "",
    dateFrom: "",
    dateTo: "",
  });

  // Favourites state
  const [favourites, setFavourites] = useState([]);

  // Filtered properties (memoized)
  const filteredProperties = useMemo(
    () => filterProperties(propertiesData.properties, criteria),
    [criteria]
  );

  // Add to favourites
  const addFavourite = (property) => {
    setFavourites((prev) =>
      prev.find((p) => p.id === property.id) ? prev : [...prev, property]
    );
  };

  // Remove from favourites
  const removeFavourite = (id) => {
    setFavourites((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-300 p-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Property Search
      </h1>

      {/* Search Form */}
      <div className="max-w-5xl mx-auto mb-8">
        <SearchForm criteria={criteria} setCriteria={setCriteria} />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Property list */}
        <div className="lg:col-span-2 space-y-6">
          <PropertyList
            properties={filteredProperties}
            onFavourite={addFavourite}
          />

          {filteredProperties.length === 0 && (
            <p className="text-center text-gray-500 text-lg">
              No properties match your search criteria.
            </p>
          )}
        </div>

        {/* Favourites list */}
        <div className="bg-white p-4 rounded-lg shadow-md sticky top-6 h-fit">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Favourites
          </h2>
          {favourites.length === 0 ? (
            <p className="text-gray-500 text-sm">
              Add properties to your favourites to see them here.
            </p>
          ) : (
            <FavouriteList
              favourites={favourites}
              addFavourite={addFavourite}
              removeFavourite={removeFavourite}
            />
          )}
        </div>
      </div>
    </div>
  );
}
