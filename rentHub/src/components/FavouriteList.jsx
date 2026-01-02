// src/components/favourites/FavouriteList.jsx
import React from "react";
import FavouriteItem from "./FavouriteItem";
import { useDrop } from "react-dnd";

const FavouriteList = ({ favourites, addFavourite, removeFavourite }) => {
  // Drag-and-drop setup
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "PROPERTY",
    drop: (item) => addFavourite(item.property),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`bg-gray-100 p-2 rounded-lg shadow w-full min-h-50 transition-colors duration-200 ${
        isOver ? "bg-yellow-100" : ""
      }`}
    >
      <h2 className="text-xl font-bold mb-4">Your Favourites</h2>

      {favourites.length === 0 ? (
        <p className="text-gray-500 text-sm">
          Drag properties here to add them!
        </p>
      ) : (
        favourites.map((property) => (
          <FavouriteItem
            key={property.id}
            property={property}
            onRemove={removeFavourite} // Ensure removeFavourite exists
          />
        ))
      )}
    </div>
  );
};

export default FavouriteList;
