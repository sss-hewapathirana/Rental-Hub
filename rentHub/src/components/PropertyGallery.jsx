import { useState } from "react";

export default function PropertyGallery({ images }) {
    const [currentIndex, setCurrentIndex] = useState(images?.length > 0 ? 0 : -1);

    if (!images || images.length === 0) {
        return <p>No images available.</p>;
    }

    const mainImage = images[currentIndex];

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="gallery relative w-full max-w-3xl mx-auto">
            {/* Main Image */}
            <img
                src={mainImage}
                alt={`Image ${currentIndex + 1}`}
                className="w-full h-auto rounded shadow-md"
            />

            {/* Left Arrow */}
            <button
                onClick={prevImage}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
            >
                &#8592;
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextImage}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
            >
                &#8594;
            </button>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-2 overflow-x-auto justify-center">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                            index === currentIndex ? "border-blue-500" : "border-gray-200"
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}
