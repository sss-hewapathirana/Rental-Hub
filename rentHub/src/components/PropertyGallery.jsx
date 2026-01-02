// src/components/PropertyGallery.jsx
import { useState } from "react";

export default function PropertyGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="gallery">
      <img className="main-image" src={mainImage} alt="" />

      <div className="thumbnails">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
}
