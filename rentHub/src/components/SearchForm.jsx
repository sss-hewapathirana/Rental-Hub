import React from "react";

const SearchForm = ({ criteria, setCriteria }) => {
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
                <label htmlFor="PropertyType" className="block text-gray-700 font-semibold mb-2">Property Type</label>
                <select
                    id="PropertyType"
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
                <label htmlFor="minPrice" className="block text-gray-700 font-semibold mb-2">Min Price (£)</label>
                <input
                    id="minPrice"
                    type="number"
                    name="minPrice"
                    value={safeCriteria.minPrice ?? ""}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Max Price */}
            <div>
                <label htmlFor="maxPrice" className="block text-gray-700 font-semibold mb-2">Max Price (£)</label>
                <input
                    id="maxPrice"
                    type="number"
                    name="maxPrice"
                    value={safeCriteria.maxPrice ?? ""}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Min Bedrooms */}
            <div>
                <label htmlFor="minBedrooms" className="block text-gray-700 font-semibold mb-2">Min Bedrooms</label>
                <input
                    id="minBedrooms"
                    type="number"
                    name="minBedrooms"
                    value={safeCriteria.minBedrooms ?? ""}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Max Bedrooms */}
            <div>
                <label htmlFor="maxBedrooms" className="block text-gray-700 font-semibold mb-2">Max Bedrooms</label>
                <input
                    id="maxBedrooms"
                    type="number"
                    name="maxBedrooms"
                    value={safeCriteria.maxBedrooms ?? ""}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Postcode Area */}
            <div>
                <label htmlFor="postcodeArea" className="block text-gray-700 font-semibold mb-2">Postcode Area</label>
                <input
                    id="postcodeArea"
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
                <label htmlFor="dateFrom" className="block text-gray-700 font-semibold mb-2">Date From</label>
                <input
                    id="dateFrom"
                    type="date"
                    name="dateFrom"
                    value={safeCriteria.dateFrom}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Date To */}
            <div>
                <label htmlFor="dateTo" className="block text-gray-700 font-semibold mb-2">Date To</label>
                <input
                    id="dateTo"
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
