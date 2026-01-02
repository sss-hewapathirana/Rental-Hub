// src/pages/SearchPage.jsx
import { useState, useMemo } from "react";
import propertiesData from "../data/properties.json";
import PropertyList from "../components/PropertyList";
import SearchForm from "../components/SearchForm";
import FavouriteList from "../components/FavouriteList";
import { filterProperties } from "../utils/filterProperties";
import { Search, Heart } from "lucide-react";

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
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="text-center mb-2">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Property Search
            </h1>
            <p className="text-gray-600">Find your perfect property</p>
          </div>
        </div>

        {/* Search Form */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
              <Search className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-800">Search Filters</h2>
            </div>
            <SearchForm criteria={criteria} setCriteria={setCriteria} />
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Property list */}
          <div className="lg:col-span-2 space-y-6">
            {filteredProperties.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
                  <p className="text-gray-700 font-medium">
                    <span className="text-blue-600 font-semibold">{filteredProperties.length}</span> {filteredProperties.length === 1 ? 'property' : 'properties'} found
                  </p>
                </div>
            )}

            <PropertyList
                properties={filteredProperties}
                onFavourite={addFavourite}
            />

            {filteredProperties.length === 0 && (
                <div className="bg-white rounded-lg shadow-md p-12 text-center border border-gray-200">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No Properties Found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search filters to see more results
                  </p>
                </div>
            )}
          </div>

          {/* Favourites list */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 sticky top-6 h-fit">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <h2 className="text-lg font-semibold text-gray-800">
                    Favourites
                  </h2>
                </div>
                {favourites.length > 0 && (
                    <span className="px-2 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full">
                  {favourites.length}
                </span>
                )}
              </div>
            </div>

            <div className="p-4">
              {favourites.length === 0 ? (
                  <div className="text-center py-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-6 h-6 text-gray-400" />
                    </div>
                    <p className="text-gray-500 text-sm">
                      Add properties to your favourites to see them here
                    </p>
                  </div>
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
      </div>
  );
}