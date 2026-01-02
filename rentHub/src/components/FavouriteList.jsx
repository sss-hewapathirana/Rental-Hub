import FavouriteItem from "./FavouriteItem";
import { useDrop } from "react-dnd";

const FavouriteList = ({ favourites, addFavourite, removeFavourite }) => {
  // Set up drop target
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "PROPERTY",
    drop: (item) => {
      // Only add if it doesn't already exist
      const exists = favourites.some(fav => fav.id === item.property.id);
      if (!exists) addFavourite(item.property);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
      <div
          ref={drop}
          className={`bg-gray-100 p-4 rounded-lg min-h-[300px] border-2 border-dashed
        ${isOver ? "border-blue-500 bg-yellow-100" : "border-gray-300"}`}
      >
        <h2 className="text-xl font-bold mb-4">Your Favourites</h2>

        {favourites.length === 0 ? (
            <p className="text-sm text-gray-500">
              Drag properties here 👇
            </p>
        ) : (
            favourites.map((property) => (
                <FavouriteItem
                    key={property.id}
                    property={property}
                    onRemove={removeFavourite}
                />
            ))
        )}
      </div>
  );
};

export default FavouriteList;
