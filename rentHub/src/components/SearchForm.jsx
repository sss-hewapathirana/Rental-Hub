// src/components/SearchForm.jsx
import React from "react";

const SearchForm = ({ criteria, setCriteria }) => {
  // Safety defaults
  const safeCriteria = {
    type: "Any",
    minPrice: null,
    maxPrice: null,
    minBedrooms: null,
    maxBedrooms: null,
    postcodeArea: "",
    dateFrom: "",
    dateTo: "",
    ...criteria,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let val = value;

    if (["minPrice", "maxPrice", "minBedrooms", "maxBedrooms"].includes(name)) {
      val = value === "" ? null : Number(value);
    }

    setCriteria({
      ...criteria,
      [name]: val,
    });
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Property Type */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Property Type</label>
        <select
          name="type"
          value={safeCriteria.type}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Any">Any</option>
          <option value="House">House</option>
          <option value="Flat">Flat</option>
        </select>
      </div>

      {/* Min Price */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Min Price (£)</label>
        <input
          type="number"
          name="minPrice"
          value={safeCriteria.minPrice ?? ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Max Price */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Max Price (£)</label>
        <input
          type="number"
          name="maxPrice"
          value={safeCriteria.maxPrice ?? ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Min Bedrooms */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Min Bedrooms</label>
        <input
          type="number"
          name="minBedrooms"
          value={safeCriteria.minBedrooms ?? ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Max Bedrooms */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Max Bedrooms</label>
        <input
          type="number"
          name="maxBedrooms"
          value={safeCriteria.maxBedrooms ?? ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Postcode Area */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Postcode Area</label>
        <input
          type="text"
          name="postcodeArea"
          value={safeCriteria.postcodeArea}
          onChange={handleChange}
          placeholder="e.g. BR5, NW1"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Date From */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Date From</label>
        <input
          type="date"
          name="dateFrom"
          value={safeCriteria.dateFrom}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Date To */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Date To</label>
        <input
          type="date"
          name="dateTo"
          value={safeCriteria.dateTo}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </form>
  );
};

export default SearchForm;
